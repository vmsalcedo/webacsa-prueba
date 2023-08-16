


// window.addEventListener('scroll', function() {
//     var navbar = document.querySelector('.navbar');
//     if (window.scrollY > 0) {
//       navbar.classList.add('navbar-scroll');
//     } else {
//       navbar.classList.remove('navbar-scroll');
//     }
//   });


//   window.addEventListener('scroll', function() {
//     var myNavbar = document.getElementById('myNavbar');
//     var scrollPosition = window.scrollY || window.pageYOffset;
  
//     if (scrollPosition > 0) {
//       myNavbar.classList.add('navbar-scrolled');
//     } else {
//       myNavbar.classList.remove('navbar-scrolled');
//     }
//   });








document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleButton");
  const contentDiv = document.getElementById("menu-acsa");
  const overlay = document.getElementById("overlay");

  // Función para cambiar el estado del div y mostrar/ocultar el overlay
  function toggleDivState() {
    contentDiv.style.display = contentDiv.style.display === "none" ? "block" : "none";
    overlay.style.display = overlay.style.display === "none" ? "block" : "none";
  }

  // Evento clic en el botón
  toggleButton.addEventListener("click", function(event) {
    event.stopPropagation(); // Evitar que el clic se propague a otros elementos
    toggleDivState();
  });

  // Evento clic en el overlay para ocultar el div y el overlay
  overlay.addEventListener("click", function(event) {
    contentDiv.style.display = "none";
    overlay.style.display = "none";
  });
});



  