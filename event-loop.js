function a(){
    console.log('a')
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    d();
    console.log('bb');
}
function d(){
    console.log('d');
    console.log('dD');
}

setTimeout ( () => {
    console.log('inside timeout')
}, 2000)

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
a();