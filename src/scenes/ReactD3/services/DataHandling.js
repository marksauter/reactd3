/* @flow */

import * as d3 from 'd3';
import includes from 'lodash/includes';
import find from 'lodash/find';

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

const incomesByCountyNames = countyNames => d =>
  includes(countyNames, { name: d['countyName'] });

const findCountyName = countyNames => d =>
  find(countyNames, { name: d['countyName'] });


export const loadAllData = (callback: Function = () => null) => {
  d3.queue()
    .defer(d3.json, 'data/us.json')
    .defer(d3.csv, 'data/us-county-names-normalized.csv', cleanCountyNames)
    .defer(d3.csv, 'data/county-median-incomes.csv', cleanIncomes)
    .defer(d3.csv, 'data/h1bs-2012-2016-shortened.csv', cleanSalary)
    .defer(d3.csv, 'data/us-state-names.tsv', cleanUSStateName)
    .await((error, us, countyNames, medianIncome, techSalaries, USstateNames) => {
      const
      const medianIncomesMap =
        medianIncomes.filter(d => find(countyNames, { name: d['countyName'] }))
                     .map(d => {

                     })
    });
}

