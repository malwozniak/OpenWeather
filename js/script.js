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


button.addEventListener('click', function(name){
    var key = '7ded80d91f2b280ec979100cc8bbba94';
    const allkey = 'https://api.openweathermap.org/data/2.5/forecast?q=' + nameCity.value+'&cnt='+cn+ '&appid=' + key;
    
    console.log(allkey);
    fetch(allkey)  
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var tempValue = data['list'][0]['main']['temp'];
      var nameValue = data['city']['name'];
      var descValue = data['list'][0]['weather'][0]['description'];
      var icon = data['list'][0]['weather'][0]['icon'];
      var datetext = data['list'][0]['dt_txt'];
      var celcius = Math.round(parseFloat(tempValue)-273.15);
    
      main.innerHTML = nameValue;
      date.innerHTML = "Date: "+datetext;
      desc.innerHTML = "Description: "+descValue;
      temp.innerHTML = "Temperture: "+celcius + '\xB0C '
      clouds.innerHTML = `<img src="${"http://openweathermap.org/img/w/"+icon+".png"}"\>`;
     
     // var fahrenheit = Math.round(((parseFloat(d.main.tempp)-273.15)*1.8)+32); 
 
     var tempValuee = data['list'][1]['main']['temp'];
     var descValuee = data['list'][1]['weather'][0]['description'];
     var datetextt = data['list'][1]['dt_txt'];
     var iconn = data['list'][1]['weather'][0]['icon'];
     var celciuss = Math.round(parseFloat(tempValuee)-273.15);
     datee.innerHTML = "Date: "+datetextt;
     descc.innerHTML = "Descritption: "+descValuee;
     tempp.innerHTML = "Temperature: "+celciuss + '\xB0C '
     cloudss.innerHTML = `<img src="${"http://openweathermap.org/img/w/"+iconn+".png"}"\>`;
     
    
    })
     
    })
