//window.onload = 

//Al cargar, esconde los div designados: decodeBox, encodeBox y btn_ini

function goToEncode(){
    document.getElementById("select_path").style.display="none";
    document.getElementById("encode_box").style.display="block";
    document.getElementById("btn_ini").style.display="block";
   
}

function goToDecode(){
    document.getElementById("select_path").style.display="none";
    document.getElementById("decode_box").style.display="block";
    document.getElementById("btn_ini").style.display="block";
    }


// las siguientes funciones obtienen el valor de:
// input textarea, offset y obtiene el resultado del cipher encode y decode

function getEncoText(){
    let userTextEncode = document.getElementById("textarea_enco").value.toUpperCase();
    let offsetEnco = parseInt(document.getElementById("selec_offset_enco").value);
    encodeResult = cipher.encode(userTextEncode,offsetEnco);
//    console.log(userTextEncode)
//    console.log(offsetEnco);
  }

function getDecoText(){
    let userTextDecode = document.getElementById("textarea_deco").value.toUpperCase();
     let offsetDeco = parseInt(document.getElementById("selec_offset_deco").value);
    decodeResult = cipher.decode(userTextDecode,offsetDeco);
    
    //console.log(offsetDeco);
    //console.log(userTextDecode); 
    }

//botón para volver al inicio
btn_go_ini.addEventListener('click', () => {
location.reload(select_path);
    
})

