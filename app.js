let h3=document.querySelector("#count");
let h4=document.querySelector("#number");
let head=0;
let interval;
let trail=0;
let btn1=document.getElementById("btn one");
let img=document.getElementById("img");
let h1=document.querySelector("h1");
let btn2=document.getElementById("btntwo");
function headtrail(){
    interval=setInterval(()=>{
    let rand= Math.floor(Math.random()*2)+1;
    console.log(rand);
    if(rand%2==0){
    img.src="tails.svg";
     
}
else{
     img.src="heads.svg";
     
    }       
},1);
 setTimeout(stopInterval,2000);
 }
 btn1.addEventListener("click",headtrail);
 img.addEventListener("click",headtrail);
 function stopInterval(){
 clearInterval(interval);
 console.log("Interval stopped.");
    let rand= Math.floor(Math.random()*2)+1;
    console.log(rand);
    if(rand%2==0){
    img.src="tails.svg";
    trail++;
    h3.innerText=`your tails count is ${trail}`
}
else{
     img.src="heads.svg";
     head++; 
     h4.innerText=`your head count is ${head}`;
    }  
 }
function reset(){
    console.log("reset");
    clearInterval(interval);
    head=0;
    trail=0;
    img.src="heads.svg";
    h3.innerText=`your tails count is ${trail}`
    h4.innerText=`your head count is ${head}`;
}
btn2.addEventListener("click",reset);
// echo "# flipcoin" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PiyushBhatt123/flipcoin.git
// git push -u origin main