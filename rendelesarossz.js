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

function osszesen() {
    x.style.display = "none";
    var sqlText = "SELECT sum(ar*db) as Összesen FROM rendelestetel join termek on rendelestetel.termekId = termek.id";
    sql(sqlText);
}