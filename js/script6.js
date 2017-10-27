//This progrom work fine with FireFox, it will not work with Chrome. 

var worker;

function startWorker() {
    worker = new Worker("js/worker.js");
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    };
}

function stopWorker() {
    worker.terminate();
}
