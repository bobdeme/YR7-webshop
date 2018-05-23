// SELECT * FROM `vasarlo` WHERE cim_varos = "Budapest" - ez lenne a query-m

function pestiarcok() {
//	var sqlText = "SELECT nev as Név, stilus as Stílus, nyelv as Nyelv, hossz as Hossz, korhatar as Korhatár, forgalmazo as Forgalmazó, ar as Ár, keszlet as Készlet FROM termek ORDER BY nev";
    var sqlText = 'SELECT * FROM vasarlo WHERE cim_varos = "Budapest"'; //Ide írd az SQL lekérdezést
    sql(sqlText);
}