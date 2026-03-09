function add_to_display(value){
document.getElementById("Display").value+=value
}

function calculate(){
    var expression=document.getElementById('Display').value
    var result=eval(expression)
    document.getElementById('Display').value=result
}
function Clear(){
    document.getElementById('Display').value=""
}