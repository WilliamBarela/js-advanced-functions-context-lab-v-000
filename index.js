/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
 // Your code here
const arrayToObject = (valArray, keys, object = {}) => {
  valArray.map( (value, i) => {
    object[keys[i]] = value;
  });
  return object;
};

const createEmployeeRecord = (employee) => {
  const employeeObject = {"timeInEvents": [], "timeOutEvents":[]};
  const keys = ["firstName", "familyName", "title", "payPerHour"];

  return arrayToObject(employee, keys, employeeObject);
};

const createEmployeeRecords = (employees) => {
  const employeeObjects = [];
  
  employees.map(employee => {
    employeeObjects.push( createEmployeeRecord(employee) );
  });
  return employeeObjects;
};


