function bot(){
    let but=document.getElementById("cinco");
    let num=document.getElementById("dos");
    let respuesta=document.getElementById("respuesta");
    let explicacion=document.getElementById("explicacion")
    if(but.dataset.click=="0"){
        but.innerText="Hide";
        but.dataset.click="1";
        if(num.checked ){
            respuesta.innerText="Correct answer";
            explicacion.innerText="The solution of 10x5=50";
            

        }else if(!num.checked){
            respuesta.innerText="Incorrect answer";
            explicacion.innerText="The solution of 10x5=50";

        }
        }else{
        but.innerText="Check answer";
        but.dataset.click="0";
        respuesta.style.visibility="hidden";
        explicacion.style.visibility="hidden";
        }

}
