
const express = require('express');
const app = express();
const PORT = 3000

const {filtrarPorEspecialidad} = require ('./datos-filter')
const {usersData} =require ('./datos.js');

app.get('/', (req, res) => {    
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
    </head>
    <body>
        <nav>
            <a href="/marketing">Marketing</a> 
            <a href="/developers">Developers</a> 
            <a href="/QAs">QAs</a> 
            <a href="/ventas">Ventas</a> 
        </nav>
        <h1>Listado de Especialidades</h1>
        <ul>
            <li>{ id: 1, name: 'Alice', age: 28, specialty: 'marketing' },</li>
            <li>{ id: 2, name: 'Bob', age: 35, specialty: 'developers' },</li> 
            <li>{ id: 3, name: 'Charlie', age: 30, specialty: 'developers' }, </li>
            <li>{ id: 4, name: 'David', age: 25, specialty: 'QAs' },</li>
            <li>{ id: 5, name: 'Emma', age: 32, specialty: 'ventas' },</li> 
            <li>{ id: 6, name: 'Frank', age: 28, specialty: 'marketing' },</li>
            <li>{ id: 7, name: 'Grace', age: 34, specialty: 'developers' },</li> 
            <li>{ id: 8, name: 'Hank', age: 27, specialty: 'QAs' },</li> 
            <li>{ id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },</li>
            <li>{ id: 10, name: 'Jack', age: 29, specialty: 'marketing' },</li> 
            <li>{ id: 11, name: 'Karen', age: 36, specialty: 'developers' },</li> 
            <li>{ id: 12, name: 'Leo', age: 26, specialty: 'QAs' },</li> 
            <li>{ id: 13, name: 'Mia', age: 33, specialty: 'ventas' },</li> 
            <li>{ id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },</li> 
            <li>{ id: 15, name: 'Olivia', age: 37, specialty: 'developers' },</li>
            <li>{ id: 16, name: 'Paul', age: 24, specialty: 'QAs' },</li> 
            <li>{ id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },</li> 
            <li>{ id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },</li> 
            <li>{ id: 19, name: 'Sara', age: 35, specialty: 'developers' },</li> 
            <li>{ id: 20, name: 'Tom', age: 29, specialty: 'QAs' },</li> 
            <li>{ id: 21, name: 'Uma', age: 30, specialty: 'ventas' },</li> 
            <li>{ id: 22, name: 'Victor', age: 27, specialty: 'marketing' },</li> 
            <li>{ id: 23, name: 'Wendy', age: 34, specialty: 'developers' },</li> 
            <li>{ id: 24, name: 'Xander', age: 31, specialty: 'QAs' },</li> 
            <li>{ id: 25, name: 'Yara', age: 33, specialty: 'ventas' }, </li>
            <li>{ id: 26, name: 'Zack', age: 28, specialty: 'marketing' },</li> 
            <li>{ id: 27, name: 'Ava', age: 36, specialty: 'developers' },</li> 
            <li>{ id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },</li> 
            <li>{ id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },</li> 
            <li>{ id: 30, name: 'Derek', age: 30, specialty: 'marketing' },</li>
        </ul>
        
    </body>
    </html>
      `);
  });
                                                                                                                  
app.get('/marketing', (req, res) => {
    const listaFiltrada = filtrarPorEspecialidad('marketing')
    //coge la lista filtrada del datos filter, mediante el metodo .map le pasa una funcion para crear cada uno de los li, despues con el join los meto en un solo valor para poder mostrarlo en el html
    const usuariosListaFiltrada = listaFiltrada.map(user => `<li>${user.name}, ${user.age} años</li>`).join('');  
   res.send(`                                                                                                      
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Marketing</title>
    </head>
    <body>
        <h1>Marketing</h1>
       <nav>
            <a href="/">Home</a> 
            <a href="/developers">Developers</a> 
            <a href="/QAs">QAs</a> 
            <a href="/ventas">Ventas</a> 
       </nav>
       <p>Número de usuarios: ${listaFiltrada.length}</p>
       <ul>${usuariosListaFiltrada}</ul>
    </body>
    </html>
    `);
  });
  
  app.get('/developers', (req, res) => {    
  const listaFiltrada = filtrarPorEspecialidad('developers')
  const usuariosListaFiltrada = listaFiltrada.map(user => `<li>${user.name}, ${user.age} años</li>`).join('');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Developers</title>
    </head>
    <body>
        <h1>Developers</h1>
       <nav>
            <a href="/">Home</a> 
            <a href="/marketing">Marketing</a> 
            <a href="/QAs">QAs</a> 
            <a href="/ventas">Ventas</a> 
       </nav>
       <p>Número de usuarios: ${listaFiltrada.length}</p>
       <ul>${usuariosListaFiltrada}</ul>
    </body>
    </html>
    `);
  });
  
  app.get('/QAs', (req, res) => {
    const listaFiltrada = filtrarPorEspecialidad('QAs')
    const usuariosListaFiltrada = listaFiltrada.map(user => `<li>${user.name}, ${user.age} años</li>`).join('');    
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QAs</title>
    </head>
    <body>
       <h1>QAs</h1>
       <nav>
            <a href="/">Home</a> 
            <a href="/marketing">Marketing</a> 
            <a href="/developers">Developers</a> 
            <a href="/ventas">Ventas</a> 
       </nav>
       <p>Número de usuarios: ${listaFiltrada.length}</p>
       <ul>${usuariosListaFiltrada}</ul>
    </body>
    </html>   
    `);
  });
 
  app.get('/ventas', (req, res) => {    
    const listaFiltrada = filtrarPorEspecialidad('ventas')
    const usuariosListaFiltrada = listaFiltrada.map(user => `<li>${user.name}, ${user.age} años</li>`).join('');
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ventas</title>
    </head>
    <body>
        <h1>Ventas</h1>
       <nav>
            <a href="/">Home</a> 
            <a href="/marketing">Marketing</a> 
            <a href="/developers">Developers</a> 
            <a href="/QAs">QAs</a> 
       </nav>
       <p>Número de usuarios: ${listaFiltrada.length}</p>
       <ul>${usuariosListaFiltrada}</ul>
    </body>
    </html>   
    `);
  });

  app.use((req, res) => {
  res.status(404).send('<h1>Pagina no encontrada</h1><a href="/">Home</a>');
});
  
  app.listen(PORT, () => {
    console.log(`Node.js está escuchando en el puerto http://localhost:${PORT}`);
  });
  