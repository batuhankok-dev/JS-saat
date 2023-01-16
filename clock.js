let username = prompt("İsminizi Giriniz")
let myName= document.querySelector("#myName")

if(username <= 0) {
    alert("Bu alan boş bırakılamaz!!!")
    location.reload();
} else {
    myName.innerHTML = `${username[0].toUpperCase()}${username.slice(1).toLowerCase()}`
}

function time() {
    let date = new Date().toLocaleString('tr-TR');
    document.getElementById('myClock').innerHTML = date;
}

setInterval(time,1000)