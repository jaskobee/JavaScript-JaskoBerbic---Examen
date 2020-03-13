// JS examen  oefening 5

var today = new Date();
// var date = today.getDate() + " " + (today.getMonth()+1) + " " + today.getFullYear();
// var time = today.getHours() + ":" + today.getMinutes();
var months = [ "Januari", "Februari", "Maart", "April", "Mei", "Juni",
    "July", "Augustus", "September", "October", "November", "December" ];

    document.getElementById("show").innerHTML = "Maandag " + today.getDate() + " " + months[2] + " " + today.getFullYear()+ " "  + today.getHours() + " uur" + " " + today.getMinutes() + " minuten";


    // DEZE WAS EEN BEETJE SLORDIG, ik weet dat het veeeel beter kan maar had er geen tijd meer voor :p SORRYY
