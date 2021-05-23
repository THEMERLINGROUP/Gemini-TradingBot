    //https://github.com/mjesuele/gemini-api-node give Methods to use
    //Used on https://exchange.sandbox.gemini.com/
    //https://www.npmjs.com/package/cryptocompare
    global.fetch=require("node-fetch");
    const exchange =require("./exchange.js");
const { hourlymovingAverage } = require("./indicators.js");
    const indicators = require("./indicators.js");
   
   
   
  
    //indicators.topExchanges("ETH","USD", 5);
    //indicators.priceHistorical("BTC", "USD", new Date("2021-21-05"));
    //exchange.marketSell("btcusd")
    //.then(res => {
    //    console.log(res)
    //})
    //.catch(error => {console.error(error)});
        var hasPosition = false;
        var strategy = function(){

        console.log(" ");
        console.log("executing Bitcoin strategy");
        exchange.price("BTC", "USD");
        indicators.minuteMovingAverage("BTC", "USD", 70);        
        indicators.hourlymovingAverage("BTC", "USD", 50);
        indicators.dailyMovingAverage("BTC","USD", 25);
        if(exchange.price < hourlymovingAverage && !hasPosition){
            exchange.marketBuy("btcusd")
            .then(res => {
                console.log("BUY");
                console.log(res);
                hasPosition = true;
                setTimeout(strategy, 2000);

            })
            .catch(error => {console.log(error)});
        }
        else if(exchange.price > hourlymovingAverage && hasPosition){
            console.log("SELL")
            exchange.marketSell("btcusd")
            .then(res => {
                console.log(res);
                console.log("Sell successful");
                hasPosition = false;
                setTimeout(strategy, 2000);
            })
            .catch(error => {console.error(error)});
        }
        else {
            console.log("HOLD");
            setTimeout(strategy, 2000);

            
        }
        

        
    }
    strategy();
    


    


    