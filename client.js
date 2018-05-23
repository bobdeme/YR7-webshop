var x = document.getElementById("lenyilo");

function sql(sqlText) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            refreshDocument(JSON.parse(xhttp.responseText));
        }
    };

    xhttp.open("POST", "http://127.0.0.1:3000/sql", true);
    xhttp.withCredentials = true;
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        sql: sqlText
    }));
}

//Ebben a függvényben dolgozd fel a kapott objektumot: jelenítsd meg az adatokat az oldalon
function refreshDocument(jsonObject) {
    var filmTabla = jsonObject;
    var tablaFejlec = []
    for (var n in filmTabla[0]) {
        tablaFejlec.push(n)
    }
    var tabla = '<table class="filmekTabla"><thead><tr>'
    var oszlop = ''
    for (var i = 0; i < tablaFejlec.length; i++) {
        tabla += '<th>' + tablaFejlec[i] + '</th>'
    }
    tabla += '</tr></thead><tbody>'
    for (var j = 0; j < filmTabla.length; j++) {
        tabla += '<tr>'
        for (var k = 0; k < tablaFejlec.length; k++) {
            oszlop = filmTabla[j][tablaFejlec[k]];
            tabla += '<td>' + [oszlop] + '</td>'
        }
        tabla += '</tr>'
    }
    tabla += '</tbody></table>'
    document.getElementById('filmekTabla').innerHTML = tabla;
}

function filmek() {
    x.style.display = "block";
    var filmNev = document.getElementById("nevId").value;
    var filmStilus = document.getElementById("stilusId").value;
    var filmNyelv = document.getElementById("nyelvId").value;
    filmNev = filmNev.replace(/\'|\"|\`|\;/g, "");
    filmStilus = filmStilus.replace(/\'|\"|\`|\;/g, "");
    filmNyelv = filmNyelv.replace(/\'|\"|\`|\;/g, "");
    var whereFeltetel = 'WHERE '
    if (filmNev != "") {
        whereFeltetel += "nev LIKE '%" + filmNev + "%' ";
    }
    if (filmStilus != "") {
        whereFeltetel += "stilus LIKE '%" + filmStilus + "%' ";
    }
    if (filmNyelv != "") {
        whereFeltetel += "nyelv LIKE '%" + filmNyelv + "%' ";
    }
    if (whereFeltetel == "WHERE ") {
        whereFeltetel = "";
    }
    var sqlText = "SELECT nev as Név, stilus as Stílus, nyelv as Nyelv, hossz as Hossz, korhatar as Korhatár, forgalmazo as Forgalmazó, ar as Ár, keszlet as Készlet FROM termek " + whereFeltetel + " ORDER BY nev";
    sql(sqlText);
}

function filmekGomb() {
    x.style.display = "block";
    document.getElementById("nevId").value = '';
    document.getElementById("stilusId").value = '';
    document.getElementById("nyelvId").value = '';
    var sqlText = "SELECT nev as Név, stilus as Stílus, nyelv as Nyelv, hossz as Hossz, korhatar as Korhatár, forgalmazo as Forgalmazó, ar as Ár, keszlet as Készlet FROM termek ORDER BY nev";
    sql(sqlText);
}

function arnovekvo() {
    var filmNev = document.getElementById("nevId").value;
    var filmStilus = document.getElementById("stilusId").value;
    var filmNyelv = document.getElementById("nyelvId").value;
    filmNev = filmNev.replace(/\'|\"|\`|\;/g, "");
    filmStilus = filmStilus.replace(/\'|\"|\`|\;/g, "");
    filmNyelv = filmNyelv.replace(/\'|\"|\`|\;/g, "");
    var whereFeltetel = 'WHERE '
    if (filmNev != "") {
        whereFeltetel += "nev LIKE '%" + filmNev + "%' ";
    }
    if (filmStilus != "") {
        whereFeltetel += "stilus LIKE '%" + filmStilus + "%' ";
    }
    if (filmNyelv != "") {
        whereFeltetel += "nyelv LIKE '%" + filmNyelv + "%' ";
    }
    if (whereFeltetel == "WHERE ") {
        whereFeltetel = "";
    }
    var sqlText = "SELECT nev as Név, stilus as Stílus, nyelv as Nyelv, hossz as Hossz, korhatar as Korhatár, forgalmazo as Forgalmazó, ar as Ár, keszlet as Készlet FROM termek " + whereFeltetel + " ORDER BY ar";
    sql(sqlText);
}

function arcsokkeno() {
    var filmNev = document.getElementById("nevId").value;
    var filmStilus = document.getElementById("stilusId").value;
    var filmNyelv = document.getElementById("nyelvId").value;
    filmNev = filmNev.replace(/\'|\"|\`|\;/g, "");
    filmStilus = filmStilus.replace(/\'|\"|\`|\;/g, "");
    filmNyelv = filmNyelv.replace(/\'|\"|\`|\;/g, "");
    var whereFeltetel = 'WHERE '
    if (filmNev != "") {
        whereFeltetel += "nev LIKE '%" + filmNev + "%' ";
    }
    if (filmStilus != "") {
        whereFeltetel += "stilus LIKE '%" + filmStilus + "%' ";
    }
    if (filmNyelv != "") {
        whereFeltetel += "nyelv LIKE '%" + filmNyelv + "%' ";
    }
    if (whereFeltetel == "WHERE ") {
        whereFeltetel = "";
    }
    var sqlText = "SELECT nev as Név, stilus as Stílus, nyelv as Nyelv, hossz as Hossz, korhatar as Korhatár, forgalmazo as Forgalmazó, ar as Ár, keszlet as Készlet FROM termek " + whereFeltetel + " ORDER BY ar DESC";
    sql(sqlText);
}

function nevnovekvo() {
    var filmNev = document.getElementById("nevId").value;
    var filmStilus = document.getElementById("stilusId").value;
    var filmNyelv = document.getElementById("nyelvId").value;
    filmNev = filmNev.replace(/\'|\"|\`|\;/g, "");
    filmStilus = filmStilus.replace(/\'|\"|\`|\;/g, "");
    filmNyelv = filmNyelv.replace(/\'|\"|\`|\;/g, "");
    var whereFeltetel = 'WHERE '
    if (filmNev != "") {
        whereFeltetel += "nev LIKE '%" + filmNev + "%' ";
    }
    if (filmStilus != "") {
        whereFeltetel += "stilus LIKE '%" + filmStilus + "%' ";
    }
    if (filmNyelv != "") {
        whereFeltetel += "nyelv LIKE '%" + filmNyelv + "%' ";
    }
    if (whereFeltetel == "WHERE ") {
        whereFeltetel = "";
    }
    var sqlText = "SELECT nev as Név, stilus as Stílus, nyelv as Nyelv, hossz as Hossz, korhatar as Korhatár, forgalmazo as Forgalmazó, ar as Ár, keszlet as Készlet FROM termek " + whereFeltetel + " ORDER BY nev";
    sql(sqlText);
}

function nevcsokkeno() {
    var filmNev = document.getElementById("nevId").value;
    var filmStilus = document.getElementById("stilusId").value;
    var filmNyelv = document.getElementById("nyelvId").value;
    filmNev = filmNev.replace(/\'|\"|\`|\;/g, "");
    filmStilus = filmStilus.replace(/\'|\"|\`|\;/g, "");
    filmNyelv = filmNyelv.replace(/\'|\"|\`|\;/g, "");
    var whereFeltetel = 'WHERE '
    if (filmNev != "") {
        whereFeltetel += "nev LIKE '%" + filmNev + "%' ";
    }
    if (filmStilus != "") {
        whereFeltetel += "stilus LIKE '%" + filmStilus + "%' ";
    }
    if (filmNyelv != "") {
        whereFeltetel += "nyelv LIKE '%" + filmNyelv + "%' ";
    }
    if (whereFeltetel == "WHERE ") {
        whereFeltetel = "";
    }
    var sqlText = "SELECT nev as Név, stilus as Stílus, nyelv as Nyelv, hossz as Hossz, korhatar as Korhatár, forgalmazo as Forgalmazó, ar as Ár, keszlet as Készlet FROM termek " + whereFeltetel + " ORDER BY nev DESC";
    sql(sqlText);
}

function vasarloadat() {
    x.style.display = "none";
    var email = document.getElementById("emailId").value;
    var jelszo = document.getElementById("passwordId").value;
    email = email.replace(/\'|\"|\`|\;/g, "");
    jelszo = jelszo.replace(/\'|\"|\`|\;/g, "");
    var sqlText = "SELECT nev as Név, DATE_FORMAT(szuletesnap, '%Y.%m.%d.') as Születésnap, email as Email, cim_orszag as Ország, cim_irsz as Irsz, cim_varos as Város, cim_utca as Cím, posta_orszag as 'Szállítási ország', posta_irsz as 'Szállítási irsz', posta_varos as 'Szállítási város', posta_utca as 'Szállítási cím' FROM `vasarlo` WHERE email = '" + email + "' AND jelszo = '" + jelszo + "'"; //Ide írd az SQL lekérdezést
    sql(sqlText);
}

function vasarlorendeles() {
    x.style.display = "none";
    var email = document.getElementById("emailId").value;
    var jelszo = document.getElementById("passwordId").value;
    email = email.replace(/\'|\"|\`|\;/g, "");
    jelszo = jelszo.replace(/\'|\"|\`|\;/g, "");
    var sqlText = "SELECT termek.nev as Film, db as Mennyiség, ar as 'Ár/db', fizetesmod.nev as Fizetés, DATE_FORMAT(rendelesdatum, '%Y.%m.%d.') as Dátum, ar*db as Összesen FROM rendeles JOIN vasarlo ON rendeles.vasarloId = vasarlo.id JOIN rendelestetel ON rendeles.id = rendelestetel.rendelesId JOIN termek ON rendelestetel.termekId = termek.id JOIN fizetesmod ON rendeles.fizetesmod = fizetesmod.id WHERE email = '" + email + "' AND jelszo = '" + jelszo + "' ORDER BY rendelesdatum";
    sql(sqlText);
}