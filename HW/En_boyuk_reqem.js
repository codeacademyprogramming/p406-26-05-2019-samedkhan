
var digits = [99, 58, 95, 55, 74, 112, 157];
var temp = digits[0];

for(var i=0; i<digits.length; i++){   

    if(temp<digits[i]){
       
        temp = digits[i];
      
    }   
  
}
console.log("Ən böyük rəqəm -" + temp);
