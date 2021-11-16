//1-topshiriq 
//yaxlitlash va modullash
var numbers = [3.02, -3.65, 5, -9];
// var value = Math.abs(1152);
// console.log("First Test Value : " + value );

        //  var value = Math.abs(null);
        //  console.log("<br />Second Test Value : " + value );

        //  var value = Math.abs(20);
        //  console.log("<br />Third Test Value : " + value );

        //  var value = Math.abs("string");
        //  console.log("<br />Fourth Test Value : " + value );


function normalize(arr){
    var normalizeNumbers = [];
    for(i=0; i<arr.length; i++){
        normalizeNumbers.push(Math.abs(Math.round(arr[i])));
    }

    return normalizeNumbers;
}
console.log(normalize(numbers));



//2-topshiriq
//arraydagi sonlarni qo'shish
var numbers2 = [1, 3, 5, 9];

function sumElement(arr){
     

     for(i=0 ,sum=0; i<arr.length; i++){
        sum = sum + arr[i];

     }
     return sum;
}
console.log(sumElement(numbers2));


//3-topshiriq
//eng uzun so'zni qaytarish

var matn = "bdhs dvgsj jifbcndko sbhcds ad" 

function longWord(arr) {
    arr=arr.split(" ");
    console.log(arr);
    
    var l = "";
    for(i=0; i<arr.length; i++){
        
        if(arr[i].length < arr[i+1].length){
            l=arr[i+1];
        }else{
            l= arr[i];
        }
    }
    console.log(l);
    return l;
}

console.log(longWord(matn));