var phantom = require('phantom');
var $ = require('jquery');
var sitepage = null;
var phInstance = null;
phantom.create()
    .then(instance => {
        phInstance = instance;
        return instance.createPage();
    })
    .then(page => {
        sitepage = page;
        return page.open('http://google.com');
    })
    .then(status => {
        console.log(status);
        return sitepage.property('content');
    })
    .then(content => {

        sitepage.evaluate(function() {
          // return $('#lst-ib').value('happy testing!!!!');
          return document.getElementById('lst-ib').innerHTML;
        }).then(function($obj) {
          console.log($obj);
          sitepage.render('google.png')
          sitepage.close();
          phInstance.exit();
        });


    })
    .catch(error => {
        console.log(error);
        phInstance.exit();
    });
