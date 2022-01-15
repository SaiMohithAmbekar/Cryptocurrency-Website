let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

let set = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

$.ajax(set).done(function (res){
    // console.log(res);
    btc.innerHTML = res.bitcoin.usd;
    eth.innerHTML = res.ethereum.usd;
    doge.innerHTML = res.dogecoin.usd;
});