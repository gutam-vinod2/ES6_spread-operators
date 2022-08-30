const myVehicle = {
brand:'ford',
model:'mustang',
color:'red'
}
const updateMyVehicle = {
  type:'car',
  year:2021,
  color:'black'
}

const myUpdateVehicle = {...myVehicle,...updateMyVehicle};

//check the result object in the console:
console.log(myUpdateVehicle);