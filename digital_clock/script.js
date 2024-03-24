function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert midnight (0 o'clock) to 12
  
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
  
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').innerHTML = timeString;
  }
  
  setInterval(updateClock, 1000); // Update every second