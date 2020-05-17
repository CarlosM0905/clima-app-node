const axios = require('axios')


const getClima = async (lat, lng)=> {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6663b3f96bce6c5e33cd86b3fc9e7c36&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}