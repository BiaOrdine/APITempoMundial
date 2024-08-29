async function getWeather() {
    //Criação da variavel para pegar o valor do input cidade
    var cidade = document.getElementById('city').value
    //Conectar com a API
    var response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Variavel para consumir o JONS do item temperatura
    var tempCelsius = response.data.main.temp;

    //Imprimir valor no Front End com concatenar Jquery e duas casas decimais.
    document.getElementById('temp').innerHTML = `A temperatura atual de ${cidade} é: ${tempCelsius.toFixed(2)} °C `;

}

//Chamar a Função
getWeather();