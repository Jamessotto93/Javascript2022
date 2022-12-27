class Contacto {
  constructor (nombre, apellido, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
  }
}

let contactos = [];
let operando = true;


while (operando) {
  let opcion = Number(prompt(`
                        Bienvenidos a Agenda.com.ar
                        "Seleccione una opcion"
                        1) AGREGAR UN NUEVO CONTACTO
                        2) BORRAR UN CONTACTO
                        3) LISTAR TODOS LOS CONTACTOS 
                        4) BUSCAR UN CONTACTO
                        
                        PARA SALIR PRESIONE ENTER O INGRESE "0"`));

  switch (opcion) {
    case 0:
      alert(`Se cerró el sistema`);
      operando = false;
      break;
    case 1:
      let nom = prompt("Ingrese Nombre del Contacto");
      let ape = prompt("Ingrese Apellido del Contacto");
      let email = prompt("Ingrese el e-mail del contacto").toLocaleLowerCase();
      let tel = Number(prompt("Ingrese Telefono del Contacto"));
      
      if (typeof nom === 'string' || nom === "" && typeof ape === 'string' || ape === "" && typeof email === 'string' || email === "" && typeof tel == 'number' || tel === "") {
        contacto = new Contacto(nom, ape, email, tel);
        agregarContacto();
        cuentaContactos();
      } else {
        alert("controle los Datos Ingresados");
      }
      break;
      case 2:
         emailContacto = prompt(`Ingrese el mail del Contacto que desea Eliminar`).toLocaleLowerCase();
        eliminaContacto(emailContacto);   
        break;
      case 3:
         listarContactos();
        break;
      case 4:
        let cadena = prompt("Ingrese el nombre, apellido, correo electrónico o teléfono del contacto que desea encontrar");
        buscarContactos(cadena);
        break;
    default:
      alert("Seleccione una opción válida");
  }
}


function agregarContacto(){
  contactos.push(contacto);
  console.log(contactos);
}

function eliminaContacto(mail){
  const resultado = contactos.find(contacto => contacto.email === mail);
  if(resultado === undefined){
    console.log(`No existe ese e-mail en tus Contactos`);
  }else{
    console.log(resultado);
    let indice = contactos.findIndex(contacto => contacto.email === mail);
    //alert(indice);
    contactos.splice(indice, 1);
    cuentaContactos();
  }
}

function cuentaContactos(){
  console.log(`Tu Agenda tiene ${contactos.length} Contactos`);
}

function listarContactos() {
  if (contactos.length === 0) {
    alert('Agenda vacía');
    return;
  }

  for(let contacto of contactos){
    alert(`Datos de los Contactos nombre: ${contacto.nombre}, Apellido, ${contacto.apellido}, e-mail: ${contacto.email}, telefono ${contacto.telefono}`);
  }
}
listarContactos ()

function buscarContactos(cadena) {
  let resultados = contactos.filter(contacto => {
    return contacto.nombre.includes(cadena) || contacto.apellido.includes(cadena) || contacto.email.includes(cadena) || contacto.telefono.toString().includes(cadena);
  });

  if (resultados.length === 0) {
    alert('No se han encontrado resultados');
    return;
  }

  for (let contacto of resultados) {
    alert(`Datos de los Contactos nombre: ${contacto.nombre}, Apellido, ${contacto.apellido}, e-mail: ${contacto.email}, telefono ${contacto.telefono}`);
  }
}
buscarContactos ()