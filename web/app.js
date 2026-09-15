// Mis empresas para la FE
// Se arranca desde la carpeta 99_FE con:  python -m http.server 8000
// y se abre en:                           http://localhost:8000/web/
//
// Ficheros que lee esta web:
//   config.json            -> punto de partida y km_max
//   ../datos/empresas.csv  -> tus empresas
//
// Las siete piezas (README, Paso 13). Una cada vez, probando en el navegador:
//   1. Leer config.json y crear el mapa Leaflet en #mapa con un marcador en el punto de partida
//   2. Leer ../datos/empresas.csv con PapaParse (download: true, header: true)
//   3. Un marcador por empresa
//   4. Función distanciaKm(lat1, lon1, lat2, lon2) con la fórmula del semiverseno (haversine)
//   5. Deslizador de radio (1 km hasta km_max) y círculo en el mapa
//   6. Listado ordenado por distancia en #listado y contador en #contador
//   7. Ficha de la empresa pulsada en #ficha
