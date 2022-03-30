let cantidad = prompt ("Cuanta gente hay?");

let alumnostotales = [];

for (i = 0; i < cantidad; i++){

alumnostotales[i] = [prompt("nombre del alumno" + (i+1)),0];

}

const tomarAsistencia = (nombre,p)=>{

	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "P"){
		 alumnostotales[i][1]++;

	}
}

for(i = 0; i < 30; i++){
   for (alumno in alumnostotales){

   tomarAsistencia(alumnostotales[alumno][0]),alumno;

   }	
}

for (alumno in  alumnostotales){

	 let resultado = `${alumnostotales[alumno][0]}: <br>
    ----------- Presentes: ${alumnostotales[alumno[1]]} <br>
    ----------- Ausencias: ${30 -alumnostotales[alumno[1]]}

	 `;
    if (30 - alumnostotales[alumno][1]  > 18) {

      resultado+= document.write("Reprobado por ausencias<br>")
    }

    else{

    	resultado +="<br>"
    }


}