
const getBtn=document.getElementById('btn')
const getH2=document.getElementsByClassName('number')

console.log("Value here")
console.log(getH2[0].innerHTML)
let value= getH2[0].innerHTML
function increment(){
   value++
    for (let index = 0; index < getH2.length; index++) {

    const element = getH2[index];
    element.innerHTML=value
   }
    

}
getBtn.onclick = increment;

