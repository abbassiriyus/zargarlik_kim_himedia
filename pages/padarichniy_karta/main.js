function validateInput() {
    var valueInp=document.querySelector('.ClassForJS').value
    if(valueInp==0){
        document.querySelector('.ClassForJS').style='border:2px solid red'
        document.querySelector('.input-container p').style='color:red'
         
        
    }else{
          document.querySelector('.thirdSomething').style='display:flex'
        document.querySelector('.seconSomething').style='display:none'
    }
}


function checkBtn() {
    
   if(sd){
    document.querySelector('#ControlKod').style='display:block'
    document.querySelector('.podtverditBtn1').style='display:block'
    document.querySelector('.podtverditBtn').style='display:none'
   }
}