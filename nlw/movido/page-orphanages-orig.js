//create map
const map = L.map('mapid').setView([-29.9372586, -51.072624], 15);
//create and add tilelayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
 .addTo(map);

//creat icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
    })

//create popup
//A PARTIR DESSE PONTO O CÓDIGO DEIXOU DE FUNCIONAR, COM O CÓDIGO ORIGIVAL DA LEAFLET  FUNCIONAVA;
//SEM AJUDA DE NINGUÉM NÃO FUI CAPAZ DE ENCONTRAR A SOLUÇÃO

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240}).setcontent('Lar das Meninas <a href="orphanage.html?id=1 class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')
//create and add map
L.marker([-29.9372586, -51.072624], {icon: icon }).addTo(map)
    .bindPopup(popup)    