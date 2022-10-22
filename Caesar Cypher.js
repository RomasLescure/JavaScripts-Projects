function rot13(str) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let finStr = "";
    for(let i=0; i<str.length; i++){
      if(alphabet.indexOf(str[i]) >=13){
        finStr += alphabet[alphabet.indexOf(str[i])-13]
      }else if(alphabet.indexOf(str[i])<13 && alphabet.indexOf(str[i])>=0){
        finStr += alphabet[alphabet.indexOf(str[i])+13];
      }else{
        finStr+= str[i];
      }
    }
    console.log(finStr);
    return finStr;
    
  }
  
  rot13("SERR PBQR PNZC");