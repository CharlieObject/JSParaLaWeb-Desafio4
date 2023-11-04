// Arreglo de objetos venta
const departamentos_venta = [
  {src:'../assets/img/depa.jpg', descripcion: 'Es tu mejor oprtunidad', ubicacion: 'Lira 300', habitaciones: 2, costo: 370000, smoke: true, pets: false },
  {src:'../assets/img/depa.jpg', descripcion: 'Fresco, soleado y carismatico', ubicacion: 'Luz 2343', habitaciones: 1, costo: 206000, smoke: false, pets: true },
  {src:'../assets/img/depa.jpg', descripcion: ' Una experiencia sin igual', ubicacion: 'Santa isabel 200', habitaciones: 3, costo: 500000, smoke: true, pets: false },
  {src:'../assets/img/depa.jpg', descripcion: 'Un dpto. con lineas personales', ubicacion: 'Portugal 550', habitaciones: 1, costo: 250000, smoke: false, pets: false },
  {src:'../assets/img/depa.jpg', descripcion: 'Un sin igual de emociones', ubicacion: 'Oxford 120', habitaciones: 2, costo: 310000, smoke: false, pets: true },
  {src:'../assets/img/depa.jpg', descripcion: 'Ven, atrevete a conocerlo', ubicacion: 'Maracaibo 1200', habitaciones: 3, costo: 420000, smoke: false, pets: false }
]
  
  const dptos_venta = document.querySelector("#venta_html")

  let contador = 0;


  
//    ciclo renderizado venta
for (let dpto of departamentos_venta){
  
  if(departamentos_venta[contador].smoke == true && departamentos_venta[contador].pets == true){

    bandera = `<div class = "div_venta_int"> <img src="${dpto.src}" alt=""> <h3>${dpto.descripcion}</h3> <p><i class="fa-solid fa-location-dot"></i> <span class="space">${dpto.ubicacion}</span></p> <p>Habitaciones: ${dpto.habitaciones} <span> <i class="fa-solid fa-bed"></i></p> <p><i class="fa-solid fa-dollar-sign"></i><span class="space">${dpto.costo}</span></p> <p class="verde"><i class="fa-solid fa-smoking verde"></i> <span class="space">Permitido fumar</span></p> <p class="verde"><i class="fa-solid fa-paw verde"></i> <span class="space">No se permiten mascotas</span></p> </div> `;
  
    dptos_venta.innerHTML += bandera;
  }
  if(departamentos_venta[contador].smoke == false && departamentos_venta[contador].pets == false){

    bandera = `<div class = "div_venta_int"> <img src="${dpto.src}" alt=""> <h3>${dpto.descripcion}</h3> <p><i class="fa-solid fa-location-dot"></i> <span class="space">${dpto.ubicacion}</span></p> <p>Habitaciones: ${dpto.habitaciones} <span> <i class="fa-solid fa-bed"></i></p> <p><i class="fa-solid fa-dollar-sign"></i><span class="space">${dpto.costo}</span></p> <p class="rojo"><i class="fa-solid fa-ban-smoking rojo"></i> <span class="space">prohibido fumar</span></p> <p class="rojo"><i class="fa-solid fa-ban rojo"></i> <span class="space">No se permiten mascotas</span></p> </div> `;
  
    dptos_venta.innerHTML += bandera;
  }
  if(departamentos_venta[contador].smoke == true && departamentos_venta[contador].pets == false){

    bandera = `<div class = "div_venta_int"> <img src="${dpto.src}" alt=""> <h3>${dpto.descripcion}</h3> <p><i class="fa-solid fa-location-dot"></i> <span class="space">${dpto.ubicacion}</span></p> <p>Habitaciones: ${dpto.habitaciones} <span> <i class="fa-solid fa-bed"></i></p> <p><i class="fa-solid fa-dollar-sign"></i><span class="space">${dpto.costo}</span></p> <p class="verde"><i class="fa-solid fa-smoking verde"></i> <span class="space">Permitido fumar</span></p> <p class="rojo"><i class="fa-solid fa-ban rojo"></i> <span class="space">No se permiten mascotas</span></p> </div> `;
  
    dptos_venta.innerHTML += bandera;
  }
  if(departamentos_venta[contador].smoke == false && departamentos_venta[contador].pets == true){

    bandera = `<div class = "div_venta_int"> <img src="${dpto.src}" alt=""> <h3>${dpto.descripcion}</h3> <p><i class="fa-solid fa-location-dot"></i> <span class="space">${dpto.ubicacion}</span></p> <p>Habitaciones: ${dpto.habitaciones} <span> <i class="fa-solid fa-bed"></i></p> <p><i class="fa-solid fa-dollar-sign"></i><span class="space">${dpto.costo}</span></p> <p class="rojo"><i class="fa-solid fa-ban-smoking rojo"></i> <span class="space">Prohibido fumar</span></p> <p class="verde"><i class="fa-solid fa-paw verde"></i> <span class="space">Mascotas permitidas</span></p> </div> `;
  
    dptos_venta.innerHTML += bandera;
  }

  contador++;

}