function palindrome(str) {
    const newStr= str.replace(/[^a-z1-9]/gi, "").toLowerCase();
    console.log(newStr);
    let finStr = newStr.length -1;
    for(let i=0; i<finStr; i++){
      if(newStr[i]== newStr[finStr]){
        finStr--;
      }else{
        return false;
      }
    }
    return true;
  }
  
  palindrome("eye");