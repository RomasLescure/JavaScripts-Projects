function convertToRoman(num) {
    let finStr = "";
    const numRom = [
        {number: 1000, roman: 'M'},
        {number: 900, roman: 'CM'},
        {number: 500, roman: 'D'},
        {number: 400, roman: 'CD'},
        {number: 100, roman: 'C'},
        {number: 90, roman: 'XC'},
        {number: 50, roman: 'L'},
        {number: 40, roman: 'XL'},
        {number: 10, roman: 'X'},
        {number: 9, roman: 'IX'},
        {number: 5, roman: 'V'},
        {number: 4, roman: 'IV'},
        {number: 1, roman: 'I'},

    ]
    while(num > 0){
        for(let i=0; i<numRom.length; i++){
            if(num - numRom[i]["number"] >= 0){
                finStr += numRom[i]["roman"];
                num = num - numRom[i]["number"];
                i = numRom.length;
            }
        }
    }
    console.log(finStr);
    return finStr;
  }

  convertToRoman(1782);