function tovbtn(key) {
    for (let index = 0; index <  document.querySelectorAll('.tab_but').length; index++) {
        document.querySelectorAll('.tab_but')[index].style="background:#F5F5F5"
        document.querySelectorAll('.tab_but span')[index].style='color:#939393'
    }
    document.querySelectorAll('.tab_but')[key].style="background:#00000046 "
    document.querySelectorAll('.tab_but span')[key].style='color:black'
    document.querySelector('.kuryer').style='display:block'
    document.querySelector('.kuryer1').style='display:none'
    document.querySelector('.kuryer2').style='display:none'
    document.querySelector('.question').style='display:none'
}
function tovbtn1(key) {
    for (let index = 0; index <  document.querySelectorAll('.tab_but').length; index++) {
        document.querySelectorAll('.tab_but')[index].style="background:#F5F5F5 !important"
        document.querySelectorAll('.tab_but span')[index].style='color:#939393'
    }
    document.querySelectorAll('.tab_but span')[key].style='color:black'
    document.querySelectorAll('.tab_but')[key].style="background:#00000046 !important"
    document.querySelector('.kuryer').style='display:none'
    document.querySelector('.kuryer1').style='display:block'
    document.querySelector('.kuryer2').style='display:none'
    document.querySelector('.question').style='display:none'
}
function tovbtn2(key) {
    for (let index = 0; index <  document.querySelectorAll('.tab_but').length; index++) {
        document.querySelectorAll('.tab_but')[index].style="background:#F5F5F5"
        document.querySelectorAll('.tab_but span')[index].style='color:#939393'
    }
    document.querySelectorAll('.tab_but')[key].style="background:#00000046"
    document.querySelectorAll('.tab_but span')[key].style='color:black'
        document.querySelector('.kuryer').style='display:none'
        document.querySelector('.kuryer1').style='display:none'
        document.querySelector('.kuryer2').style='display:block'
    document.querySelector('.question').style='display:none'
}
function tovbtn3(key) {
    for (let index = 0; index <  document.querySelectorAll('.tab_but').length; index++) {
        document.querySelectorAll('.tab_but')[index].style="background:#F5F5F5"
        document.querySelectorAll('.tab_but span')[index].style='color:#939393'
    }
    document.querySelectorAll('.tab_but')[key].style="background:#00000046"
    document.querySelectorAll('.tab_but span')[key].style='color:black'
    document.querySelector('.kuryer').style='display:none'
    document.querySelector('.kuryer1').style='display:none'
    document.querySelector('.kuryer2').style='display:none'
document.querySelector('.question').style='display:block'
}
tovbtn(0)