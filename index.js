// let obj = {
//   FirstName: "John",
//   LastName: "Stoke",
//   Salary: 5000,
//   PermanentStaff: true,
// };

// console.log(obj);

let depObj = {
  departmentid: 3,
  departmentname: "payroll",
};

let skillArray = [];

const obj = JSON.parse(
  '{"Firstname":"John","LastName":"Stoke" ,"Salary":5000, "permanentEmployee":true,"depobj":{}}'
);

obj["depobj"] = depObj;
console.log(obj);
