
 
//1
function isPrime(number) {
    if (number===1) {
        return "not prime"
    }
    
for (let i = 2; i < number; i++) {
    if (number %i ===0) {
     return "not prime" ;
     }
    }
        return " prime " ;
      

}console.log(isPrime(9));

//2
let Arr=[1,5,10,100,70,4,20,50];
function MaxAndMin() {
  let max=Math.max.apply(null,Arr);
  let min=Math.min.apply(null,Arr);
   for (let i = 0; i <= Arr.length; i++) {
   
   console.log(Math.max.apply(null,Arr));
   console.log(Math.min.apply(null,Arr));
   break;
}
   

}MaxAndMin();

//3
function power(base,pow) {
    let result=1;
    if (pow===0) {
        return 1;
    }else
    for (let i = 1; i <=pow; i++) {
        result*= base;
    
    } return  result;
}console.log(power(2,4));


//4

for (let i = 0; i <5; i++) {
    for (let j = 0; j <=i; j++) {
         console.log("*"); 
    }
    console.log(" ")
}

//5
let x=0;
for (let i = 0; i <=1000; i++) {
   if (i%3===0&&i%5===0) {
   x+=i;
   }
  
} console.log(x);
