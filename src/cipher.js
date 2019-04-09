window.cipher = {
  encode: (userTextEncode,offsetEnco) => {
    
    let encodeResult ="";
    let asciiResult ="";
   
    for(let i=0; i<userTextEncode.length; i++) {
      
      let textToAscii = userTextEncode[i].charCodeAt(0);
                   
      if(textToAscii>=65 && textToAscii<=90){
        asciiResult = (textToAscii - 65 + offsetEnco)%26 + 65;
            
        //codigo ascii a letra
        encodeResult += String.fromCharCode(asciiResult);
      
        
      } else if (textToAscii>=97 && textToAscii<=122){
        asciiResult = (textToAscii - 97 + offsetEnco)%26 + 97;

        encodeResult += String.fromCharCode(asciiResult);

      } //else if (textToAscii === 32){
        //textToAscii += 32;
      //}
    }
    return encodeResult;
        
  },
 

  decode: (userTextDecode,offsetDeco) => {
    
    let decodeResult ="";
    let asciiResult ="";
   
    for(let i=0; i<userTextDecode.length; i++) {
      
      let textToAscii = userTextDecode[i].charCodeAt(0);
      //console.log(textToAscii);
             
      if(textToAscii>=65 && textToAscii<=90){
    
        asciiResult = (textToAscii + 65 - offsetDeco)%26 + 65;
        //console.log(asciiResult);
      
        //codigo ascii a letra
        decodeResult += String.fromCharCode(asciiResult);
        //console.log(decodeResult);

      }else if (textToAscii>=97 && textToAscii<=122){
        asciiResult = (textToAscii - 97 - offsetDeco)%26 + 97;
        //console.log(asciiResult);

        decodeResult += String.fromCharCode(asciiResult);
        //console.log(decodeResult);
      }
    }
    return decodeResult;
  }
}
