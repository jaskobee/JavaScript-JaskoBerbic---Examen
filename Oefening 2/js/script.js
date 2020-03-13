// alert("connected");

// Praktische examen JavaScript - Oefening 2


function bmi() {
    var L = Number(document.querySelector('#lengte').value);
    var G = Number(document.querySelector('#gewicht').value);
    var BMI = (G / Math.pow(L, 2));


    if (BMI<18.5){
    document.getElementById("comment").style.color = "red"
    document.getElementById("comment").innerHTML = 'je BMI is ' + BMI.toFixed(2) + ' Ondergewicht';
    }
    if (BMI>=18.5 && BMI<=25) {
    document.getElementById("comment").style.color = "green"
    document.getElementById("comment").innerHTML = 'je BMI is ' + BMI.toFixed(2) + ' Gezond normaal gewicht';
    }
    if (BMI>=25 && BMI<=30){
    document.getElementById("comment").style.color = "orange"
    document.getElementById("comment").innerHTML = 'je BMI is ' + BMI.toFixed(2) + ' Overgewicht';
    }
    if (BMI>30){
    document.getElementById("comment").style.color = "red"
    document.getElementById("comment").innerHTML = 'je BMI is ' + BMI.toFixed(2) + ' Obesitas';
    }


    console.log(BMI.toFixed(2));
}

