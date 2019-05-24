
// data link
// https://api.meteo-concept.com/api/location/city?token=4d4fd502d4165bf8a57f0db9104187f4f40473a1ec8827c9973daf4b223aa3dc&insee=35238

//$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=858e73ecfee571674024cb4bf7247185', function (data) {
// }) 
// i get my API src using a data link by City ID //
// metric = Celsius/ appid = API Key//

// "http://api.openweathermap.org/data/2.5/weather?q=%22" + variable + "&units=metric&appid=858e73ecfee571674024cb4bf7247185"
// Changer les données d'une src par une variable à l'intérieur de cette dernière.

var searchBar = document.querySelector('#search-bar');
//Je déclare une variable let nommé searchBar je lui affecte le mot clé document suivi d'un querySelector afin de lié ma variable à une balise <input> de par son  id #search-bar.
var btn = document.querySelector('.btn');
//Je déclare une variable nommé btn lié à une balise de type <button> par un document.querySelector à l'aide  de sa classe .btn 
var ville = "";
//Je déclare une variable nommé ville avec une valeur vide "" qui correspondra à l'attribut ville (ex = Paris) présent dans le code  src  original du data link.

// je déclare une fonction nommé villeSearch sans arguments avec plusieurs instructions;
function villeSearch() {
    // Je déclare ma var string ville égale à
    ville = searchBar.value;
    apiSrc = ('http://api.openweathermap.org/data/2.5/weather?q=+' + ville + '&units=metric&appid=858e73ecfee571674024cb4bf7247185');
    //Je déclare une var nommé apiSrc qui comprend mon data link avec la var nommé ville plus haut.



    $.getJSON(apiSrc, function (data) {
        console.log(data);

        // icone du temps
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        // console.log(icon);
        $('.icon').attr('src', icon);
        //Temperature
        var temp = data.main.temp;
        $('.temp').text(Math.floor(temp));
        //Humidité
        var humid = data.main.humidity;
        $('.humid').text(humid);

        //Lieu
        var lieu = data.name;
        $('.lieu').text(lieu);
        var temps = data.weather[0].description;
        $('.weather').text(temps);
        var time = data.sys.timezone;
        $('.timezone').text(time);


    })

}
//Fonction pour reload la page 6sec après click sur le bouton.
function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
}
//²Fonction pour un utiliser la touch entrée comme click du bouton.
input = document.querySelector('#search-bar');
input.addEventListener("keyup", function (event) {
    if (event.Keycode === 13) {
        event.preventDefault();
        document.getElementById('button').click();
    }
});
// var unix_timestamp =
// var date = new Date(unix_timestamp * 1000);
// var hours = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
