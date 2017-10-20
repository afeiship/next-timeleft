var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-timeleft');

describe('next/timeleft', function () {



  it('date nx.timeleft - big date',function(){
    var day_40 = 1000 * 60 * 60 * 24 * 40;
    var day_1 = 1000 * 60 * 60 * 24;
    var hour_20 = 1000 * 60 * 60 * 20;
    var minuts_23 = 1000 * 60 * 23;
    var second_3 = 1000 * 3;
    var micro = 3;

    var res = nx.timeleft( day_40+ day_1 + hour_20 + minuts_23 + second_3 + micro );

    assert.equal( res.year, 0);
    assert.equal( res.month, 1);
    assert.equal( res.week, 5);
    assert.equal( res.day, 41);
    assert.equal( res.hour, 20);
    assert.equal( res.minute, 23);
    assert.equal( res.second, 3);
    assert.equal( res.micro, 3);
  });

  it('date nx.timeleft - 1001ms',function(){
    var ms_10 = 10;

    var res = nx.timeleft( 1001 );

    assert.equal( res.year, 0);
    assert.equal( res.month, 0);
    assert.equal( res.week, 0);
    assert.equal( res.day, 0);
    assert.equal( res.hour, 0);
    assert.equal( res.minute, 0);
    assert.equal( res.second, 1);
    assert.equal( res.micro, 1);
  })

  it('date nx.timeleft - 1000ms',function(){
    var ms_10 = 10;

    var res = nx.timeleft( 1000 );
    assert.equal( res.year, 0);
    assert.equal( res.month, 0);
    assert.equal( res.week, 0);
    assert.equal( res.day, 0);
    assert.equal( res.hour, 0);
    assert.equal( res.minute, 0);
    assert.equal( res.second, 1);
    assert.equal( res.micro, 0);
  });


  it('date nx.timeleft - 461542000',function(){
    var secounds_test = 461542000;

    var res = nx.timeleft( secounds_test );
    assert.equal( res.year, 0);
    assert.equal( res.month, 0);
    assert.equal( res.week, 0);
    assert.equal( res.day, 5);
    assert.equal( res.hour, 8);
    assert.equal( res.minute, 12);
    assert.equal( res.second, 2);
    assert.equal( res.micro, 0);
  });


});
