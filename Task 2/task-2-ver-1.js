/* Version 1 - Fuction performed step by step */
function parseUrl(link) {
  let arr = link.split('/');
  
  let obj = {
    hostname: '',
    pasthname: '',
    hash: ''
  };
  
  obj.hostname = arr[2];
  
  let arrPasthName = arr.splice(3).join('/');
  arrPasthName = arrPasthName.split('?');
  obj.pasthname = '/' + arrPasthName[0];
  
  let arrHash = arrPasthName.splice(1).toString().split('#');
  obj.hash = '#' + arrHash.pop();
  
  return obj;
}

let obj = parseUrl('http://ffwagency.com/do/any.php?a=1#foo');

console.log(obj.hash);
console.log(obj.hostname);
console.log(obj.pasthname);