// https://michelenasti.com/2018/09/19/Javascript-chiamare-funzioni-senza-usare-parentesi-(what!).html
var a = 1, b = 2;
var d = 'abc';
function tag(strings, ...values) {
    console.log(strings); // "Hello "
    console.log(values);  // 50
    return "Bazinga!";
}

tag`Hello ${a} World ${b} 2.123 ${d}`;