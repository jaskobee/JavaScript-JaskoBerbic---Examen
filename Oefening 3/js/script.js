// Praktische examen JavaScript - Oefening 3


/* Hiermee doe ik de menu knop open en dicht */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Hiermee doe ik de menu terug dicht als ze ergens buiten de knop clicken
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // EURO TO DOLLAR CONVERT FUNCTION -----------------------------------

  function euroTodollar() {
    var euro2dollar = 1.10;
    var bedrag = document.querySelector("#bedrag").value;

    document.getElementById("convert").value = (bedrag * euro2dollar).toFixed(2);

  }

  // Dollar To Euro CONVERT FUNCTION -----------------------------------

  function dollarToeuro() {
    var dollar2euro = 0.91;
    var bedrag = document.querySelector("#bedrag").value;

    document.getElementById("convert").value = (bedrag * dollar2euro).toFixed(2);

  }

  // Euro To Pond CONVERT FUNCTION -----------------------------------

  function euroTopond() {
    var euro2pond = 0.85;
    var bedrag = document.querySelector("#bedrag").value;

    document.getElementById("convert").value = (bedrag * euro2pond).toFixed(2);

  }

  // Pond To Euro CONVERT FUNCTION -----------------------------------

  function pond2euro() {
    var pond2euro = 1.17;
    var bedrag = document.querySelector("#bedrag").value;

    document.getElementById("convert").value = (bedrag * pond2euro).toFixed(2);

  }
