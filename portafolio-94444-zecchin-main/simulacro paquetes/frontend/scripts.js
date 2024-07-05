const apiurl = 'http://localhost:3001/museos';

function cargarMuseos (museo){
      let url='http://localhost:3001/museos'
      if (museo){
          apiurl +=`/museos?museo=${museo}`;
      }
      fetch(url)
      .then(response => response.json())
      .then(museos => {
          const tableBody = document.getElementById('lista-museos');
          tableBody.innerHTML = '';
          let contenidoTabla = '';
          museos.forEach(museo => {
              contenidoTabla += `
              <tr>
                  <td>${museo.nombre}</td>
                  <td>${museo.ubicacion}</td>
                  <td>${museo.exposiciones}</td>
                  <td>${museo.horarios}</td>
                  <td>${museo.precioEntrada}</td>
              </tr>`
              tableBody.innerHTML = contenidoTabla;
      });
      })
      .catch(error => console.error());
  
   //Agregar codigo
};

cargarMuseos();
