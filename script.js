function criarMapa(){

    var mapid = document.getElementById("mapid").id;

    mymap = L.map('mapid').setView([-22.818043, -47.260032], 14);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);



    L.marker([-22.80328, -47.28619]).addTo(mymap)
        .bindPopup("<b>Colégio Network.</b><br />Escola Particular.");

    L.marker([-22.8233, -47.27355]).addTo(mymap)
        .bindPopup("<b>E.E. João Franceschini.</b><br />Escola Estadual.");

    L.marker([-22.80683, -47.21846]).addTo(mymap)
        .bindPopup("<b>Sesi 341.</b><br /> Centro Educacional.");


    L.marker([-22.80809, -47.22028]).addTo(mymap)
        .bindPopup("<b>Colégio Nova Veneza.</b><br /> Escola Particular.");  

    L.marker([-22.80751, -47.22424]).addTo(mymap)
        .bindPopup("<b>Mickey Minnie.</b><br />Centro Recreação Infantil.");  

    L.marker([-22.81046, -47.22958]).addTo(mymap)
        .bindPopup("<b>E.E. Maria Rosa Carolino dos Santos.</b><br />Escola Estadual.");  

    L.marker([-22.81125, -47.23807]).addTo(mymap)
        .bindPopup("<b>EMEF Antonieta Cia Viel.</b><br />Escola Municipal.");   

    L.marker([-22.81341, -47.2409]).addTo(mymap)
        .bindPopup("<b>Escola Educação Infantil Vivendo e Aprendendo.</b><br />Escola Particular.");  

    L.marker([-22.81761, -47.25495]).addTo(mymap)
        .bindPopup("<b>E.E. Elysabeth de Mello Rodrigues.</b><br />Escola Estadual.");  

    L.marker([-22.81799, -47.25416]).addTo(mymap)
        .bindPopup("<b>E.E. Ivani Aparecida Queiroz Perez.</b><br />Escola Estadual.");  

    L.marker([-22.81833, -47.26891]).addTo(mymap)
        .bindPopup("<b>Escola Municipal Reino da Garotada.</b><br />Escola Municipal.");  

    L.marker([-22.82713, -47.26741]).addTo(mymap)
        .bindPopup("<b>E.E. Dom Jayme de Barros Câmara.</b><br />Escola Estadual.");  

    L.marker([-22.8282, -47.26653]).addTo(mymap)
        .bindPopup("<b>Escola Municipal Dr. Leandro Franceschini.</b><br />Escola Municipal."); 

    L.marker([-22.81561, -47.29033]).addTo(mymap)
        .bindPopup("<b>E.E. Professor Cândido José Martinez.</b><br />Escola Estadual.");  

    L.marker([-22.82111, -47.27035]).addTo(mymap)
        .bindPopup("<b>Colégio Méson.</b><br />Escola Particular."); 

    L.marker([-22.81198, -47.28048]).addTo(mymap)
        .bindPopup("<b>E.M. Sabidinho </b><br />Escola Municipal."); 

    L.marker([-22.81196, -47.27942]).addTo(mymap)
        .bindPopup("<b>Euclides Miranda Vereador.</b><br />Escola Estadual."); 


    var popup = L.popup();

    return mymap;

}

function showInput() {
        document.getElementById('display_nome').innerHTML = "Nome: " + document.getElementById("tx_nome").value + "<br>";
        document.getElementById('display_email').innerHTML = "Email: " + document.getElementById("tx_email").value + "<br>";
        document.getElementById('display_mensagem').innerHTML = "Mensagem: " + document.getElementById("tx_mensagem").value;
}