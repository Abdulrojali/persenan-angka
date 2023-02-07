let inputMoney=document.querySelector('#inputMoney')
let select=document.querySelector('#diskon')
let output=document.querySelector('.output')
const outputBill=document.querySelector('.output-bill')

const buyers=document.querySelector(".buyers").addEventListener('click',function(){
    let total=''
    for(let i=0; i<select.length; i++){
     if(select.value==1){
         total+=(parseInt(inputMoney.value)*10)/100
     }
     else if(select.value==2){
          total+=(parseInt(inputMoney.value)*20)/100
     } 
     else if(select.value==3){
          total+=(parseInt(inputMoney.value)*30)/100
     }
     else if(select.value==4){
         total+=(parseInt(inputMoney.value)*40)/100
     }
     else if(select.value==5){
          total+=(parseInt(inputMoney.value)*50)/100
     }
    }
    return outputBill.innerHTML=total
})