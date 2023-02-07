let inputPersen=document.querySelector('#inputPersenan')
let select=document.querySelector('#persen')
const outputBill=document.querySelector('.output-persenan')

const enter=document.querySelector(".enter").addEventListener('click',function(){
    let total=''
     if(select.value=='10%'){
         total+=(Int(inputPersen.value)*10)/100
     }
     else if(select.value=='20%'){
          total+=(Int(inputPersen.value)*20)/100
     } 
     else if(select.value=='30%'){
          total+=(Int(inputPersen.value)*30)/100
     }
     else if(select.value=='40%'){
         total+=(Int(inputPersen.value)*40)/100
     }
     else if(select.value=='50%'){
          total+=(Int(inputPersen.value)*50)/100
     }
    return outputBill.innerHTML=total
})