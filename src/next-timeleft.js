(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var ONE_DAY = 1000 * 60 * 60 * 24;
  var ONE_MINUTE = 1000 * 60;
  var DEFAULT_FORMAT = 'yyyy-mm-dd HH:MM:ss';

  nx.timeleft = function(inTimestamp){
    var years = Math.floor(inTimestamp / ONE_DAY / 365 );
    var months = Math.floor(inTimestamp / ONE_DAY / 30 );
    var weeks = Math.floor(inTimestamp / ONE_DAY / 7);
    var days = Math.floor(inTimestamp / ONE_DAY);
    var hours = parseInt(inTimestamp / ONE_MINUTE / 60 % 24 , 10);
    var minutes = parseInt(inTimestamp / ONE_MINUTE % 60, 10);
    var seconds = parseInt(inTimestamp / 1000 % 60, 10);
    var micros = parseInt(inTimestamp % 10,10);
    return {
      year: years,
      month: months,
      week: weeks,
      day: days,
      hour: hours,
      minute: minutes,
      second: seconds,
      micro: micros
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.timeleft;
  }

}());
