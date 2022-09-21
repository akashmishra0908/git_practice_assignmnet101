function prime_number(Number){
let factor=0;
for(i=0;i<=Number;i++){
if(Number%i==0){
factor++;
}
}
if(count==2){
return true;
}
return false;
}
let ans=prime_number(13);
if(ans==true){
console.log("yes")
}
else{
console.log("No)
}
