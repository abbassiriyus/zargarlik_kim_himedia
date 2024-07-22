function validateInput() {
    var valueInp=document.querySelector('.ClassForJS').value
    var checkbox1 = document.querySelector('.checkImportant input').checked
    if(valueInp==0){
        document.querySelector('.ClassForJS').style='border:2px solid red'
        document.querySelector('.input-container p').style='color:red'
             document.querySelector('.ClassForJS2').style='border:2px solid red'
        
    }else{
          document.querySelector('.thirdSomething').style='display:flex'
        document.querySelector('.seconSomething').style='display:none'
        document.querySelector('.ClassForJS2').style='border:2px solid #B3B3B3'
        document.querySelector('.ClassForJS').style='border:2px solid #B3B3B3'
        document.querySelector('.input-container p').style='color:black'

    }

if(checkbox1){
    document.querySelector('.checkImportant p').style='color:black; '
          document.querySelector('.thirdSomething').style='display:flex'
        document.querySelector('.seconSomething').style='display:none'
}else{
    document.querySelector('.checkImportant p').style='color:red; '

}
}


function checkBtn() {
    var phoneNum = document.querySelector('.CheckPhoneInp').value
   if(phoneNum==0){
    document.querySelector('.CheckPhoneInp').style='border:2px solid red'
    document.querySelector('.PhoneText').style='color:red'
 
   }else{
    document.querySelector('.grafikBigBody').style='display:block'
    document.querySelector('.podtverditBtn2').style='display:block'
    document.querySelector('.podtverditBtn').style='display:none'
    document.querySelector('.CheckPhoneInp').style='border:2px solid #B3B3B3'
    document.querySelector('.PhoneText').style='color:black'

   }
}


function checkBtnSecond() {
    var phoneNumSecond = document.querySelector('.KodGrafik').value
if (phoneNumSecond==0) {
    document.querySelector('.KodGrafik').style='border:2px solid red'
    document.querySelector('.input-container h5').style='color:red;display:block'
}else{
     document.querySelector('#ControlKod').style='display:block'
    document.querySelector('.podtverditBtn2').style='display:none'
    document.querySelector('.podtverditBtn1').style='display:block'
    document.querySelector('.input-container h5').style=' display:none'
    document.querySelector('.KodGrafik').style='border:2px solid #B3B3B3'

}
}


function podtverditBtn3() {
    var controlForm = document.querySelector('#ControlKod input').value


    if (controlForm==0) {
        document.querySelector('#ControlKod input').style='border:2px solid red'
        document.querySelector('.ControlText').style='color:red;display:block'
    }else{
         document.querySelector('#ControlKod').style='display:block'
        document.querySelector('.podtverditBtn1').style='display:none'
     document.querySelector('.thirdSomething').style='display:none'
        document.querySelector('.fourthSomething').style='display:flex'
      
        document.querySelector('.ControlText').style=' display:black'
        document.querySelector('#ControlKod input').style='border:2px solid #B3B3B3'
    
    } 

 
}



 
var timerInterval;
var timeLeft = 60; // 1 minute in seconds
var isTimerRunning = false;

function podtverditBtn3() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  timeLeft--;
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;
  document.getElementById("timer").textContent = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    alert("Time's up! You can now send the SMS.");
  }
}

// Example usage:
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("startBtn").addEventListener("click", podtverditBtn3);
});


function checkBtnThird() {
    var controlForm = document.querySelector('#ControlKod input').value


    if (controlForm==0) {
        document.querySelector('#ControlKod input').style='border:2px solid red'
        document.querySelector('.ControlText').style='color:red;display:block'
    }else{
         document.querySelector('#ControlKod').style='display:block'
        document.querySelector('.podtverditBtn1').style='display:none'
        // document.querySelector('.podtverditBtn3').style='display:block'
        document.querySelector('.ControlText').style=' display:black'
        document.querySelector('#ControlKod input').style='border:2px solid #B3B3B3'
    
    } 

}


function BalancBtn() {
    var BalancButton =document.querySelector('.modal_in_body input').value

    if(BalancButton==0){
        document.querySelector('.errorMessage').style='display:flex'
    }
}