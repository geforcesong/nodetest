function domainName(url){
    //your code here
    const list  = url.match(/[^\/]+(\.[^\/]+)/);
    const domainFull = list&& list.length?list[0]:'';
    if(domainFull){
        return domainFull.split('.').filter(c=>c!='www')[0];
    }
    return '';
  }


  console.log(domainName("http://movoto.com"));
  console.log(domainName("http://www.movoto.co.jp"));