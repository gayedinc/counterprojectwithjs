
let visitor = prompt("Hoş geldiniz :) Adınız nedir?")

let visitorName = document.querySelector("#myName")
visitorName.innerHTML = visitor 



function showTime() {

        let now = new Date() 
        let day = now.toLocaleDateString('tr-TR', { weekday: 'long' })
        let time = now.toLocaleTimeString('tr-TR') 
        let myClock = document.querySelector("#myClock") 
        myClock.innerHTML = time + ' ' + day 
        
}

setInterval(showTime, 1000)