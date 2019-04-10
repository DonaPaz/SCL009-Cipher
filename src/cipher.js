window.cipher = {
  encode: (userTextEncode,offsetEnco) => {
    
    let encodeResult ="";
    let asciiResult ="";
   
    for(let i=0; i<userTextEncode.length; i++) {
      
      let textToAscii = userTextEncode[i].charCodeAt(0);
      
      //texto a ASCII, abecedario en mayúsculas
      if(textToAscii>=65 && textToAscii<=90){
        asciiResult = (textToAscii - 65 + offsetEnco)%26 + 65;
            
        encodeResult += String.fromCharCode(asciiResult);
      
        //texto a ASCII, abecedario en minúsculas
      } else if (textToAscii>=97 && textToAscii<=122){
        asciiResult = (textToAscii - 97 + offsetEnco)%26 + 97;

        encodeResult += String.fromCharCode(asciiResult);

        //texto a ASCII, conservar espacios
      }  else if (textToAscii === 32) {
        asciiResult = (textToAscii - 32 + offsetEnco)% 1 + 32;
        
        encodeResult += String.fromCharCode(asciiResult);
      }

    }
    return encodeResult;
        
  },
 

  decode: (userTextDecode,offsetDeco) => {
    
    let decodeResult ="";
    let asciiResult ="";
   
    for(let i=0; i<userTextDecode.length; i++) {
      
      let textToAscii = userTextDecode[i].charCodeAt(0);
      //console.log(textToAscii);
       
      //texto a ASCII, abecedario en mayúsculas
      if(textToAscii>=65 && textToAscii<=90){
    
        asciiResult = parseInt(textToAscii + 65 - offsetDeco)%26 + 65;
        //console.log(asciiResult);

        decodeResult += String.fromCharCode(asciiResult);
        //console.log(decodeResult);

         //texto a ASCII, abecedario en minúsculas
      }else if (textToAscii>=97 && textToAscii<=122){
        asciiResult = parseInt(textToAscii - 97 - offsetDeco)%26 + 97;
        //console.log(asciiResult);

        decodeResult += String.fromCharCode(asciiResult);
        //console.log(decodeResult);
      
      //texto a ASCII, conservar espacios
      }else if (textToAscii === 32) {
        asciiResult = parseInt(textToAscii - 32 - offsetDeco)% 1 + 32;
        
        decodeResult += String.fromCharCode(asciiResult);
      }
    }
    return decodeResult;
  }
}
