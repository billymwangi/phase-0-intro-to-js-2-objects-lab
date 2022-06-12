// Write your solution in this file!
const employee = {name: "Sam", streetAddress: "11 Broadway" };


function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newobj = {...employee};
    newobj[name] = value;
    return newobj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,name){
    const newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name];
    return employee;
}