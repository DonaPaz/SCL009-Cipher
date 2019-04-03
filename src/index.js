//window.onload = 

//Al cargar, esconde los div designados como decodeBox, encodeBox

function goToEncode(){
    document.getElementById("select_path").style.display="none";
    document.getElementById("encode_box").style.display="block";
   
}

function goToDecode(){
    document.getElementById("select_path").style.display="none";
    document.getElementById("decode_box").style.display="block";
    }

// estas funciones obtienen el valor de las cajas de texto
// por el momento está codificado para que muestre el mismo valor de la caja en un DIV

function getEncoText(){
    let encodeText = document.getElementById("textarea_enco").value.toUpperCase();
    document.getElementById("show_enco_msg").innerHTML = encodeText;
    
    let offsetEnco = parseInt(document.getElementById("selec_offset_enco").value);
    console.log(offsetEnco);

  }

function getDecoText(){
    let decodeText = document.getElementById("textarea_deco").value.toUpperCase();
    document.getElementById("show_deco_msg").innerHTML = decodeText;

    let offsetDeco = parseInt(document.getElementById("selec_offset_deco").value);
    console.log(offsetDeco);
  }


//Esta función permite regresar al inicio

// //función ejemplo: btnShow.addEventListener('click', () => {
// let userText = document.getElementById("user_text").value;
// console.log(userText);

//let btn_go_ini = document.getElementById("btn_go_ini");
btn_go_ini.addEventListener('click', () => {
location.reload(select_path);
    
    //let userText = document.getElementById("user_text").value;
   // alert("holo");
})

//function goIni() {
//location.reload(select_path);
//}