function pickRestaurant() {
  var bucket = [];
  $('.priority').each(function(i) {
    var idPriority = this.innerHTML.split('..');
    var id         = idPriority[0];
    var priority   = idPriority[1];
    var entries    = 0;

    switch(parseInt(priority)) {
      case 1:
        entries = 5;
        break;
      case 2:
        entries = 4;
        break;
      case 3:
        entries = 3;
        break;
      case 4:
        entries = 2;
        break;
      case 5:
        entries = 1;
        break;
    }

    for(var i=0;i<entries;i++) {
      bucket.push(id);
    }
  });
  
  var selectId = bucket[Math.floor(Math.random()*bucket.length)];
  $('#selection').html($('#' + selectId + ' .name').html());
  $('#' + selectId).addClass('highlight')
}