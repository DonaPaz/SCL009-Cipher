window.cipher = {
  encode: (userTextEncode,offsetEnco) => {
    
    let encodeResult ="";
   
    for(let i=0; i<userTextEncode.length; i++) {
      
      let textToAscii = userTextEncode[i].charCodeAt(0);
      //console.log(textToAscii);
             
      if(textToAscii>=65 && textToAscii<=90){
    
      let asciiResult = (textToAscii - 65 + offsetEnco)%26 + 65;
      //console.log(asciiResult); //prueba resultado
      
      //codigo ascii a letra
      encodeResult += String.fromCharCode(asciiResult);

    

      }
     
    }
    
    document.getElementById("show_msg_enco").innerHTML = encodeResult;

  },
 
  decode: (userTextDecode,offsetDeco) => {
    
    let decodeResult ="";
   
    for(let i=0; i<userTextDecode.length; i++) {
      
      let textToAscii = userTextDecode[i].charCodeAt(0);
      //console.log(textToAscii);
             
      if(textToAscii>=65 && textToAscii<=90){
    
        let asciiResult = (textToAscii + 65 - offsetDeco)%26 + 65;
        //console.log(asciiResult);
      
        //codigo ascii a letra
        decodeResult += String.fromCharCode(asciiResult);
        //console.log(decodeResult);
      }

     
    }
    
    document.getElementById("show_msg_deco").innerHTML = decodeResult;
  },

};
