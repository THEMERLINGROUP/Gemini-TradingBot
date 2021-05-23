    const CCAPIKey="416dc3fc11514f67a61e6c9f16d57c2661abbd9a58d4a16257c032d2330985e6";
    const CryptoCompareAPI = require("cryptocompare");
    CryptoCompareAPI.setApiKey(CCAPIKey);

    module.exports = {
        hourlymovingAverage:function movingAverage(cryptoAsset, fiatPair, hours){
        if(hours>169){
            console.log("Only up to 169 hours allowed")
            return
        }
    CryptoCompareAPI.histoHour(cryptoAsset, fiatPair)
    .then(data => {
        data= data.reverse()
        var sum = 0;
    
        for(let i=0; i<hours; i++){
            sum+=data[i].close;
        }
        var movingAverage= Math.floor(sum/hours);
        console.log(movingAverage);
    })
        .catch(error => {
        console.log(error)
    })
    },
    topExchanges:function topExchanges(cryptoAsset, fiatPair, limit){
    CryptoCompareAPI.topExchanges(cryptoAsset,fiatPair,limit)
    .then(exchanges => {
    console.log(exchanges)})
    .catch(error => {console.log(error)})
    },
    dailyMovingAverage:function movingAverage(cryptoAsset, fiatPair, days){
        if(days > 365){
            console.error("Only 365 days in a year")
            return
        }
        CryptoCompareAPI.histoDay(cryptoAsset, fiatPair)
        .then(data => {
            data.reverse()
            var sum = 0;
            for(var i = 0; i<days; i++){
                sum+= data[i].close;
            }
            var movingAverage = Math.floor(sum/days);
            console.log(movingAverage);
            
    })
    .catch(error => {
        console.log(error)
    })
    },
    minuteMovingAverage:function movingAverage(cryptoAsset, fiatPair, minutes){
        if(minutes>1440){
            console.error("MAX minutes in the day")
            return
        }
        CryptoCompareAPI.histoMinute(cryptoAsset, fiatPair)
        .then(data => {
            data.reverse()
            var sum = 0;
            for(var i = 0; i<minutes; i++){
                sum+=data[i].close;
            }
            var movingAverage = Math.floor(sum/minutes);
            console.log(movingAverage);
        })
        .catch(error => {
            console.log(error)
        });

    },
    priceHistorical:function priceHistorical(cryptoAsset, fiatPair, time){
        CryptoCompareAPI.priceHistorical(cryptoAsset,fiatPair,time)
    .then(prices => {
    console.log(prices)

    })
    .catch(error=> {
        console.log(error)
    });
    },
    coinList: function coinList(cryptoAsset){
         CryptoCompareAPI.coinList(cryptoAsset)
.then(coinList => {
  console.log(coinList)})
  .catch(error => {
      console.error(error)
  });  
    },
    priceMulti: function priceMulti(cryptoAsset, fiatPair){
        CryptoCompareAPI.priceMulti(cryptoAsset, fiatPair)
        .then(prices => {console.log(prices)})
        .catch(error => {
            console.error(error)
        });

    },
    newsFeedsAndCategories: function newsFeedsAndCategories(){
        CryptoCompareAPI.newsFeedsAndCategories()
        .then(newsFeedsAndCategories => {
            console.log(newsFeedsAndCategories)})
            .catch(error => {
                console.error(error)
        });
    }
 


    }

    

