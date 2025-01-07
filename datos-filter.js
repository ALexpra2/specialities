const {usersData} =require ('./datos.js');

function filtrarPorEspecialidad(speciality) {
    let userFilterList = [];
    usersData.forEach(user => {
       
        if(user.specialty === speciality) {
          userFilterList.push(user) 
        }
    })
    return userFilterList;
}



module.exports = {filtrarPorEspecialidad}