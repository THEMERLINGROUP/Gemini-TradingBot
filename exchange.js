const GeminiAPI = require("gemini-api").default;
const key="account-OT7FyIM3YaSS2x3ydmHN"; 
const secret = "XtpwcTY26SeYM1rodJA7NWvuaC2";
const restClient = new GeminiAPI({key, secret, sandbox:true});
const CCAPIKey="416dc3fc11514f67a61e6c9f16d57c2661abbd9a58d4a16257c032d2330985e6";
const CryptoCompareAPI = require("cryptocompare");
CryptoCompareAPI.setApiKey(CCAPIKey);

module.exports = {
    marketBuy: function(symbol){
        return restClient.newOrder({amount:0.001, price:500, side:"buy", symbol:symbol})

    },
     marketSell: function(symbol){
            return restClient.newOrder({amount:0.0001, price:50, side:"sell", symbol:symbol})
    
        },
        price: function(cryptoAsset, fiatPair){
            CryptoCompareAPI.price(cryptoAsset, fiatPair)
.then(prices => {
  console.log(prices)
})
.catch(error => {console.error(error)});
        }
    
    }
