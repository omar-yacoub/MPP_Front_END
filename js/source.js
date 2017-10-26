document.getElementById('dateButton').onclick = handleClick;

function handleClick(){
    document.getElementById('dateTarget').innerHTML = Date();
}