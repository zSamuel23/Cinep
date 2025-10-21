 window.onload = function() {
      var formulario = document.getElementById("miFormulario");
      var modal = document.getElementById("modal");
      var cerrar = document.querySelector(".cerrar");

      
      formulario.onsubmit = function(event) {
        event.preventDefault(); 
        modal.classList.add("show"); 
      };

     
      cerrar.onclick = function() {
        modal.classList.remove("show");
      };

    
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.classList.remove("show");
        }
      };
    };
