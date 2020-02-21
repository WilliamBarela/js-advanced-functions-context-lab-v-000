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


/*
const createTimeEvent = (type) => {
  return (employeeObject, timestamp) => {
    const [date, hour] = timestamp.split(" ");
    const typeText = type[0].toUpperCase() + type.slice(1);

    const valArray = [typeText, date, parseInt(hour)];
    const keys = ["type", "date", "hour"];
 
    const timeEvent = arrayToObject(valArray, keys);
  
    employeeObject[type + "Events"].push(timeEvent);
    return employeeObject;
  };
};

const createTimeInEvent = (employeeObject, timestamp) => {
  return createTimeEvent("timeIn")(employeeObject, timestamp);
};

const createTimeOutEvent = (employeeObject, timestamp) => {
  return createTimeEvent("timeOut")(employeeObject, timestamp);
};

const hoursWorkedOnDate = (employeeObject, date) => {
  const timeIn = employeeObject.timeInEvents.find(record => record.date === date);
  const timeOut = employeeObject.timeOutEvents.find(record => record.date === date);
  
  return (timeOut.hour - timeIn.hour) / 100;
};

const wagesEarnedOnDate = (employeeObject, date) => {
  const hoursWorked = hoursWorkedOnDate(employeeObject, date);
  const employeePay = employeeObject.payPerHour;
  
  return hoursWorked * employeePay;
};

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = (srcArray, firstName) => {
  return srcArray.find(employeeObject => employeeObject.firstName === firstName);
};

const calculatePayroll = (srcArray) => {
  return srcArray.reduce((sum, employeeObject) => {
    return sum + allWagesFor(employeeObject);
  }, 0);
};
 

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

*/