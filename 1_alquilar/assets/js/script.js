// Arreglo de objetos alquiler 

const departamentos_alquiler = [
  {src:'../assets/img/depa.jpg', descripcion: 'Hubicado en pleno centro ', ubicacion: 'Lira 254', habitaciones: 2, costo: 350000, smoke: false, pets: true },
  {src:'../assets/img/depa.jpg', descripcion: 'Cerca de metro sta. lucía', ubicacion: 'San isidro 435', habitaciones: 1, costo: 200000, smoke: false, pets: true },
  {src:'../assets/img/depa.jpg', descripcion: ' Una experiencia unica', ubicacion: ' Portugal 231', habitaciones: 3, costo: 400000, smoke: true, pets: false },
  {src:'../assets/img/depa.jpg', descripcion: 'Un dpto. con lineas de mujer', ubicacion: 'Marcoleta 254', habitaciones: 1, costo: 250000, smoke: false, pets: false },
  {src:'../assets/img/depa.jpg', descripcion: 'Una experiencia unica', ubicacion: 'Lira 320', habitaciones: 2, costo: 320000, smoke: false, pets: true },
  {src:'../assets/img/depa.jpg', descripcion: 'Todo lo que podras soñar', ubicacion: 'Carmen 370', habitaciones: 3, costo: 410000, smoke: false, pets: false }
]
  





// Ciclo renderizado alquiler

const dptos_alquiler = document.querySelector("#alquilar_html");
let bandera = 0;
let contador = 0;

for (let dpto of departamentos_alquiler){
  
  if(departamentos_alquiler[contador].smoke == true && departamentos_alquiler[contador].pets == true){

    bandera = `<div class = "div_venta_int"> <img src="${dpto.src}" alt=""> <h3>${dpto.descripcion}</h3> <p><i class="fa-solid fa-location-dot"></i> <span class="space">${dpto.ubicacion}</span></p> <p>Habitaciones: ${dpto.habitaciones} <span> <i class="fa-solid fa-bed"></i></p> <p><i class="fa-solid fa-dollar-sign"></i><span class="space">${dpto.costo}</span></p> <p class="verde"><i class="fa-solid fa-smoking verde"></i> <span class="space">Permitido fumar</span></p> <p class="verde"><i class="fa-solid fa-paw verde"></i> <span class="space">No se permiten mascotas</span></p> </div> `;
  
    dptos_alquiler.innerHTML += bandera;
  }
  if(departamentos_alquiler[contador].smoke == false && departamentos_alquiler[contador].pets == false){

    bandera = `<div class = "div_venta_int"> <img src="${dpto.src}" alt=""> <h3>${dpto.descripcion}</h3> <p><i class="fa-solid fa-location-dot"></i> <span class="space">${dpto.ubicacion}</span></p> <p>Habitaciones: ${dpto.habitaciones} <span> <i class="fa-solid fa-bed"></i></p> <p><i class="fa-solid fa-dollar-sign"></i><span class="space">${dpto.costo}</span></p> <p class="rojo"><i class="fa-solid fa-ban-smoking rojo"></i> <span class="space">prohibido fumar</span></p> <p class="rojo"><i class="fa-solid fa-ban rojo"></i> <span class="space">No se permiten mascotas</span></p> </div> `;
  
    dptos_alquiler.innerHTML += bandera;
  }
  if(departamentos_alquiler[contador].smoke == true && departamentos_alquiler[contador].pets == false){

    bandera = `<div class = "div_venta_int"> <img src="${dpto.src}" alt=""> <h3>${dpto.descripcion}</h3> <p><i class="fa-solid fa-location-dot"></i> <span class="space">${dpto.ubicacion}</span></p> <p>Habitaciones: ${dpto.habitaciones} <span> <i class="fa-solid fa-bed"></i></p> <p><i class="fa-solid fa-dollar-sign"></i><span class="space">${dpto.costo}</span></p> <p class="verde"><i class="fa-solid fa-smoking verde"></i> <span class="space">Permitido fumar</span></p> <p class="rojo"><i class="fa-solid fa-ban rojo"></i> <span class="space">No se permiten mascotas</span></p> </div> `;
  
    dptos_alquiler.innerHTML += bandera;
  }
  if(departamentos_alquiler[contador].smoke == false && departamentos_alquiler[contador].pets == true){

    bandera = `<div class = "div_venta_int"> <img src="${dpto.src}" alt=""> <h3>${dpto.descripcion}</h3> <p><i class="fa-solid fa-location-dot"></i> <span class="space">${dpto.ubicacion}</span></p> <p>Habitaciones: ${dpto.habitaciones} <span> <i class="fa-solid fa-bed"></i></p> <p><i class="fa-solid fa-dollar-sign"></i><span class="space">${dpto.costo}</span></p> <p class="rojo"><i class="fa-solid fa-ban-smoking rojo"></i> <span class="space">Prohibido fumar</span></p> <p class="verde"><i class="fa-solid fa-paw verde"></i> <span class="space">Mascotas permitidas</span></p> </div> `;
  
    dptos_alquiler.innerHTML += bandera;
  }

  contador++;

}
  