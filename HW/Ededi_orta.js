var digits = [10, 5, -1];
var temp=0;
var count=0;

for(var i=0; i<digits.length; i++){
    if(digits[i]>0){
        temp+=digits[i];
        count++;
    }
    
}

if(count==0){
   
    console.log("Bu ədələrin içində müsbət rəqəm yoxdur!!!")
   
}
else{
    console.log("Ədədi orta:  " + temp/count);
}

