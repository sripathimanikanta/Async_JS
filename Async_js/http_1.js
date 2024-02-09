// this is direct way of listening to the HTTPS request but
// we can control or manage this??
const request  = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

console.log(request);