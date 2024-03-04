

const key = "5b0ea78355cc4f89277636d81907ec07"

function colocarDadosNaTela (dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML= "Tempo em " + dados.name
    document.querySelector (".tempo").innerHTML= Math.floor (dados.main.temp) + "°C"
    document.querySelector (".texto-previsao").innerHTML=dados.weather[0].description
    document.querySelector ("umidade").innerHTML=dados.main.humidity + "%"
    document.querySelector (".img-previsao").src = "https://openweathermap.org/img/wn/${dados.[0].icon}.png"
}
    

async function buscarCidade (cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (Response => Response.json())
   
    colocarDadosNaTela (dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade (cidade)
}