// here we are listening to changes that takes place after we do
// WE are using addEventListener to TRACK the progress of the request
// 0: create
// 1: open
// 2: send
// 3: Download
// 4: Got

const request = new XMLHttpRequest();

request.addEventListener('readystatechange',() => {
    console.log(request, request.readyState);
    if(request.readyState === 4){
        console.log(request.responseText)
    }
})

request.open("GET", "https:/jsonplaceholder.typicode.com/todos");
request.send()
