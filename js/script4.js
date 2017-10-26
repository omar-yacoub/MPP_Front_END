//Implemented functions as parameters in JavaScript to apply the callback pattern
function handleClick(callback){
    alert('This button has been clicked');
    if (callback) {
        callback();
    }
}

function doMore() {
    alert('I could process more logic here');
}

function doSomethingElse() {
    document.writeln('<h1>test message</h1>');
}