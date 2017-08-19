/* @flow */

import * as d3 from 'd3';

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

export const loadAllData = (callback: Function = () => undefined) => {
  d3.queue()
    .defer(d3.json, 'data/us.json')
    .defer(d3.csv, 'data/us-county-names-normalized.csv')
    .defer(d3.csv, 'data/county-median-incomes.csv', cleanIncomes)
    .defer(d3.csv, 'datat/h1bs-2012-2016-shortened.csv', cleanSalary)
    .defer(d3.csv, 'data/us-state-names.tsv', cleanUSStateName)
    .await((error, us, countyNames, medianIncome, techSalaries, USstateNames) => {
      console.log(error, us, countyNames, medianIncome, techSalaries, USstateNames);
    });
}

