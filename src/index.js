//Al cargar, esconde los div designados: decodeBox, encodeBox y btn_ini
let select_path="";

const btnEncode = document.getElementById("select_encode");

btnEncode.addEventListener('click', () => {
    document.getElementById("select_path").style.display="none";
    document.getElementById("encode_box").style.display="block";
    document.getElementById("btn_ini").style.display="block";
    document.getElementById("show_msg_enco").style.display="none";
    
   
})

const btnDecode = document.getElementById("select_decode");

btnDecode.addEventListener('click', () => {
    document.getElementById("select_path").style.display="none";
    document.getElementById("decode_box").style.display="block";
    document.getElementById("btn_ini").style.display="block";
    document.getElementById("show_msg_deco").style.display="none";
})


// las siguientes funciones obtienen el valor de:
// input textarea, offset y obtiene el resultado del cipher encode y decode

let getEncoTex = document.getElementById("get_enco_text");

getEncoTex.addEventListener('click', () => {
    let userTextEncode = document.getElementById("textarea_enco").value.trim()
    let offsetEnco = parseInt(document.getElementById("selec_offset_enco").value.trim());
    document.getElementById("get_enco_text").style.display="none";
    document.getElementById("show_msg_enco").style.display="block";
    document.getElementById("show_msg_enco").innerHTML += cipher.encode(userTextEncode, offsetEnco);

  // console.log(userTextEncode)
//    console.log(offsetEnco);
})

let getDecoText = document.getElementById('get_deco_text')
getDecoText.addEventListener('click', () => {
    let userTextDecode = document.getElementById("textarea_deco").value.trim()
    let offsetDeco = parseInt(document.getElementById("selec_offset_deco").value.trim());
    document.getElementById("get_deco_text").style.display="none";
    document.getElementById("show_msg_deco").style.display="block";
    document.getElementById("show_msg_deco").innerHTML += cipher.decode(userTextDecode, offsetDeco);
    
    //console.log(offsetDeco);
    //console.log(userTextDecode); 
})

//botón para volver al inicio
let btnGoIni = document.getElementById('btn_go_ini');
btnGoIni.addEventListener('click', () => {
location.reload(select_path);
    
})
