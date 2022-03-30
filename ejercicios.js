
      function cambiartexto(boton){
          let btexto= document.getElementById(boton);
          if (btexto.innerText =="Ver codigo"){
          document.getElementById(boton).innerText ="Cerrar";
          }
          else{
              document.getElementById(boton).innerText="Ver codigo";
          }
      }
 
      function agregarcodigo(cod,div) {
      
        document.getElementById(div).textContent ="";
        let script = document.createElement('script');
        script.textContent = `function play () { ${document.getElementById(cod).textContent}} play();`;
        document.getElementById(div).insertAdjacentElement("afterbegin", script);
        }      

