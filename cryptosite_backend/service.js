var axios = require("axios");

global.crypto_price = []

function start_load_crypto_price() {
    axios.get('https://api.nomics.com/v1/currencies/ticker?key=753f284c66d7acad05372c9ca7bb611eebb8f4af&ids=BTC,ETH,XRP,BNB,ADA,DOT,DOGE,HEX,TRX,LEO,LTC,ETC,BCH&interval=1d,30d&convert=EUR&per-page=100&page=1').then(res => {
            global.crypto_price = res.data
    })
    .catch(err => {
        console.log('Error: ', err.message);
    });
}


module.exports = start_load_crypto_price