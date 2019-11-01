var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
    
    var cheerio = require('cheerio');
    var request = require('request');

    var url = 'https://smartstore.naver.com/soundpanda/products/4420283394?NaPm=ct%3Dk2ecsd2p%7Cci%3Dshopn%7Ctr%3Dhdlt%7Ctrx%3D2219607%7Chk%3D54bef79aa3f934bcda0336b49fa90e74afa05910';
    request(url, function(error, response, html){

        var $ = cheerio.load(html);
        $('img').each(function(){
            var imgSrc = $(this).attr('src');
            console.log(imgSrc);
        })

        if (error) {throw error};

    });

});
