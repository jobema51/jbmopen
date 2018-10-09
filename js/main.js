 var map = L.map('mapa').setView([-25.306864, -57.609183], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-25.306864, -57.609183]).addTo(map)
    .bindPopup('jbmopen.com')
    .openPopup();