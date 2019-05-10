function humanReadable(seconds) {
    // TODO
    var MAX = 99*3600+59*60+59;
    if(seconds >= MAX){
      return '99:59:59'
    }
    
    var hour = Math.floor(seconds/3600);
    var min = Math.floor((seconds - hour*3600) / 60)
    var sec = seconds - hour*3600 - min*60;
    return `${hour.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
  }

  console.log(humanReadable(59));