const apiurl = 'http://localhost:3000/libros';


function cargarLibros(libro){
    let url='http://localhost:3000/libros'
    if (libro){
        apiurl +=`/titulo?titulo=${libro}`;
    }
    fetch(url)
    .then(response => response.json())
    .then(libros => {
        const tableBody = document.getElementById('lista-libros');
        tableBody.innerHTML = '';
        let contenidoTabla = '';
        libros.forEach(libro => {
            contenidoTabla += `
            <tr>
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.genero}</td>
                <td>${libro.editorial}</td>
                <td>${libro.año_publicacion}</td>
            </tr>`
            tableBody.innerHTML = contenidoTabla;
    });
    })
    .catch(error => console.error());
}
// Función para buscar libros por descripción
function buscarLibros() {
    let libro = document.getElementById('input-libros').value
    cargarLibros(libro);
}
cargarLibros()