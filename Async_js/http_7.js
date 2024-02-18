// accessing our JSON from local files
// import htp from "../Async_js/json/todos.json"
const getTodos = (callback) => {
const request = new XMLHttpRequest();
    // console.log(request)
request.addEventListener('readystatechange', () => {
    // console.log(request)
    if(request.readyState === 4 && request.status === 200){
        callback(undefined, request.responseText);
    }
    else if(request.readyState === 4 ){
        callback("Could not fetch data", undefined);
    }
})

request.open('GET', '../Async_js/json/todos.json')
request.send()
}

getTodos((err, data) => {
    console.log("callback fired")
    if(err){
        console.log(err)
    }
    else {
        console.log(data)
        const text = JSON.parse(data);
        console.log(text[0])
    }
});
        // const element = document.createElement('li');
        // const UserId = document.createTextNode(text[0].userId+"\n");
        // const id = document.createTextNode(text[0].id);
        // const title = document.createTextNode(text[0].title);
        // element.appendChild(UserId);
        // element.appendChild(id);
        // element.appendChild(title);

        // const Parent = document.querySelector("ul");
        // Parent.appendChild(element);