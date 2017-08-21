// @flow

import * as d3 from 'd3';
import { find, isNull, groupBy } from 'lodash';

const cleanIncomes = d => ({
  countyName: d['Name'],
  USstate: d['State'],
  medianIncome: Number(d['Median Household Income']),
  lowerBound: Number(d['90% CI Lower Bound']),
  upperBound: Number(d['90% CI Upper Bound']),
});

const dateParse = d3.timeParse("%m/%d/%Y");

const cleanSalary = d => {
  if (!d['base salary'] || Number(d['base salary']) > 30000) {
    return null;
  }

  return {
    employer: d.employer,
    submit_date: dateParse(d['submit date']),
    start_date: dateParse(d['start date']),
    case_status: d['case status'],
    job_title: d['job title'],
    clean_job_title: d['job title'],
    base_salary: d['base salary'],
    city: d['city'],
    USstate: d['state'],
    county: d['county'],
    countyID: d['countyID'],
  };
}

const cleanUSStateName = d => ({
  code: d.code,
  id: Number(d.id),
  name: d.name,
});

const cleanCountyNames = d => ({
  id: Number(d.id),
  name: d.name,
});

const findCountyNameIn = (collection) => (d: Object) =>
  find(collection, { name: d['countyName'] });

const removeNullEntries = d => !isNull(d);

export const loadAllData = (callback: Function = () => null) => {
  d3.queue()
    .defer(d3.json, 'data/us.json')
    .defer(d3.csv, 'data/us-county-names-normalized.csv', cleanCountyNames)
    .defer(d3.csv, 'data/county-median-incomes.csv', d => removeNullEntries(cleanIncomes(d)))
    .defer(d3.csv, 'data/h1bs-2012-2016-shortened.csv', cleanSalary)
    .defer(d3.csv, 'data/us-state-names.tsv', cleanUSStateName)
    .await((error, us, countyNames, medianIncomes, techSalaries, USstateNames) => {
      const findCountyName = findCountyNameIn(countyNames);
      
      const medianIncomesWithCountyId =
        medianIncomes.filter(findCountyName)
                     .map(d => ({ ...d, countyID: findCountyName(d).id }));
      const medianIncomesByCountyId =
        medianIncomes.reduce((map, d) => ({ ...map, [d.countyID]: d }), {});

      callback({
        usTopoJson: us,
        countyNames,
        medianIncomes: medianIncomesByCountyId,
        medianIncomesByCounty: groupBy(medianIncomesWithCountyId, 'countyName'),
        medianIncomesByUSState: groupBy(medianIncomesWithCountyId, 'USstate'),
        USstateNames,
      });
    });
}

