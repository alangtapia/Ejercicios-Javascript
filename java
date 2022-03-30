let free = false;

const validarCliente = (time)=>{

	let edad = prompt("Cual es tu edad?");

	if (edad > 18){
		alert("pasa sin da ni uno");

		if (time >= 2 && time < 7 && free == false){
			alert("Entra de lo mio");
			free = true;
			}
			else {

			alert ("Entra, pero suelta pal de peso mio");
			}
	}

    else {

    	alert("No menores aqui");
    }
}

validarCliente(3);