let index= prompt ("¡Hola, Bienvenido a Refugio Don Torcuato! \n ¿Qué mascota te gustaría adoptar? Ingresá la opción que corresponda \n 1 - Adoptar un perro \n 2 - Adoptar un gato \n 0 - Salir");

if (index != "0") {

    switch (index) {
        case "1": 
        let perroAdoptado= prompt("Ellos estan esperando un hogar: \n 1 - Roco - cachorro mediano \n 2 - Pepa - adulta pequeña \n Ingresa el número que le corresponde para adoptarlo o 0 para salir");
        
            switch (perroAdoptado){
                case "1":
                    alert("Gracias! Nos vamos a comunicar con vos para completar el formulario y terminar la adopción");
                    let adoptanteRoco=prompt("Por favor indicanos tu nombre");
                    let mailRoco= prompt("Por favor ingresa tu email");
                    alert("En minutos te llegará el formulario al mail " + mailRoco);
                    console.log( "El adoptante es " + adoptanteRoco + " y su email es " + mailRoco);   
                break;

                case "2":
                    alert("Gracias! Nos vamos a comunicar con vos para completar el formulario y terminar la adopción");
                    let adoptantePepa=prompt("Por favor indicanos tu nombre");
                    let mailPepa= prompt("Por favor ingresa tu email");
                    alert("En minutos te llegará el formulario al mail " + mailPepa);
                    console.log( "El adoptante es " + adoptantePepa + " y su email es " + mailPepa);
                break;

                case "0":
                    alert("Hasta la próxima, te esperamos!");
                break;

                default:
                    alert("Opción no válida, por favor vuelva a intentarlo");
                break;
            }
            break;

            case "2":
                let gatoAdoptado= prompt("Ellos estan esperando un hogar: \n 1- Pelu hembra adulta \n 2 - Tito - macho bebe \n Ingresa el número que le corresponde para adoptarlo o 0 para salir");

                switch (gatoAdoptado){
                    case "1":
                        alert("Gracias! Nos vamos a comunicar con vos para completar el formulario y terminar la adopción");
                        let adoptantePelu=prompt("Por favor indicanos tu nombre");
                        let mailPelu= prompt("Por favor ingresa tu email");
                        alert("En minutos te llegará el formulario al mail " + mailPelu);
                        console.log( "El adoptante es " + adoptantePelu + " y su email es " + mailPelu);
                        
                    break;

                    case "2":
                        alert("Gracias! Nos vamos a comunicar con vos para completar el formulario y terminar la adopción");
                        let adoptanteTito=prompt("Por favor indicanos tu nombre");
                        let mailTito= prompt("Por favor ingresa tu email");
                        alert("En minutos te llegará el formulario al mail " + mailTito);
                        console.log( "El adoptante es " + adoptantetito + " y su email es " + mailTito);
            
                    break;

                    case "0":
                        alert("Hasta la próxima, te esperamos!");
                        break;

                    default:
                        alert("Opción no válida, por favor vuelva a intentarlo");
                        break;
                }
            break;

            default:
                alert("Opción no válida, por favor vuelva a intentarlo");
            break;
        
}
}
alert("Hasta la próxima, te esperamos!");

