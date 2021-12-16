
    var key = '7ded80d91f2b280ec979100cc8bbba94';
    var nameCity = document.querySelector('#weather_input');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('#icon');
var button= document.querySelector('.change_city');
var content = document.querySelector(".container");
var date = document.querySelector('#date');
var datee = document.querySelector('#date1');
var mainn = document.querySelector('#name1');
var tempp = document.querySelector('.temp1');
var descc = document.querySelector('.desc1');
var cloudss = document.querySelector('#icon1');

    var cn = 5;
     
button.addEventListener('click', searchWeather);

function searchWeather() {
  content.style.display = 'block';
  content.style.display = 'none';
  var cityName = main.value;
  
  var http = new XMLHttpRequest();
  var url = 'https://api.openweathermap.org/data/2.5/weather?q='  + nameCity.value+'&appid=' + key;
  var method = 'GET';
  http.open(method, url);
  http.onreadystatechange = function(){
    if(http.readyState == XMLHttpRequest.DONE && http.status === 200){
      var data = JSON.parse(http.responseText);
     
     // data.temperature = data.list[0].main.temp;
      console.log(data);
      updateWeather(data);
    }else if(http.readyState == XMLHttpRequest.DONE){
      return alert('Something went wrong');
    }
  }
  http.send();
}

function updateWeather(data) {
  main.innerHTML = data.nameCity.toUpperCase();
  desc.innerHTML = desc.description;
  temp.innerHTML = temp.temp;

}

