function form(){
    document.getElementById("form").style.display="inline"

}

function closeform(){
    document.getElementById("form").style.display="none"
}

function formLast(){
    if(submit ==true){
        document.getElementById("form").innerHTML="<p id='formp'> your response has been recorded.<br> we will contact you soon </p>"
    }
    
}