function fun(val){
    document.getElementById("screen").value+=val
}
function clearbtn(){
    document.getElementById("screen").value=""
}
function equal(){
    var text=document.getElementById("screen").value
    result=eval(text)
    document.getElementById('screen').value=result   
}