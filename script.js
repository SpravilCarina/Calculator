// Funcție pentru adunare
function adauga() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var rezultatDiv = document.getElementById("rezultat");

    // Verifică dacă unul dintre câmpuri este gol
    if (isNaN(num1) || isNaN(num2)) {
        rezultatDiv.innerText = "Vă rugăm să introduceți două numere valide!";
        rezultatDiv.className = "eroare";
        return;
    }

    // Efectuează adunarea
    var rezultat = num1 + num2;
    rezultatDiv.innerText = "Rezultatul adunării: " + rezultat;
    rezultatDiv.className = "succes";
}

// Funcție pentru scădere
function scade() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var rezultatDiv = document.getElementById("rezultat");

    if (isNaN(num1) || isNaN(num2)) {
        rezultatDiv.innerText = "Vă rugăm să introduceți două numere valide!";
        rezultatDiv.className = "eroare";
        return;
    }

    var rezultat = num1 - num2;
    rezultatDiv.innerText = "Rezultatul scăderii: " + rezultat;
    rezultatDiv.className = "succes";
}

// Funcție pentru înmulțire
function inmulteste() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var rezultatDiv = document.getElementById("rezultat");

    if (isNaN(num1) || isNaN(num2)) {
        rezultatDiv.innerText = "Vă rugăm să introduceți două numere valide!";
        rezultatDiv.className = "eroare";
        return;
    }

    var rezultat = num1 * num2;
    rezultatDiv.innerText = "Rezultatul înmulțirii: " + rezultat;
    rezultatDiv.className = "succes";
}

// Funcție pentru împărțire
function imparte() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var rezultatDiv = document.getElementById("rezultat");

    if (isNaN(num1) || isNaN(num2)) {
        rezultatDiv.innerText = "Vă rugăm să introduceți două numere valide!";
        rezultatDiv.className = "eroare";
        return;
    }

    // Verifică dacă se încearcă împărțirea la 0
    if (num2 === 0) {
        rezultatDiv.innerText = "Nu se poate împărți la 0!";
        rezultatDiv.className = "eroare";
        return;
    }

    var rezultat = num1 / num2;
    rezultatDiv.innerText = "Rezultatul împărțirii: " + rezultat;
    rezultatDiv.className = "succes";
}
