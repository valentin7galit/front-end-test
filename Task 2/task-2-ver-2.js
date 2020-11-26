/* Version 2 - Function is clean and optimal*/
function parseUrl(link) {
  let regex = /(?<url>http):\/\/(?<hostname>\w+.\w+)(?<pathname>\/.+)\?(?<query>.+)(?<hash>#\w+)/;
  let filter = link.match(regex);
  
  return filter.groups;
}

let obj = parseUrl('http://ffwagency.com/do/any.php?a=1#foo');

console.log(obj.hash);
console.log(obj.hostname);
console.log(obj.pathname);