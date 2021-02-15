function colorborder() {
    document.getElementById('bord').setAttribute('class', 'color');
    document.getElementById('bord').style.cssText = 'color:#f00;';
}
function colorBtn1() {
    document.getElementById('btn1').setAttribute('class', 'color');
    colorborder();
}
function colorBtn2() {
    document.getElementById('btn2').setAttribute('class', 'color');
    colorborder();
}
function colorBtn3() {
    document.getElementById('btn3').setAttribute('class', 'color');
    colorborder();
}
function convear() {
    var emailM = document.getElementById('mailId').value,
        massage = document.getElementById('mailalert');
    if (emailM === "") {
        massage.innerHTML = "email is empty ";

    } else {
        alert(emailM + "  تم أشتراكك بالأيميل التالي")
    }
}
function myFunction() {
    var amount = document.getElementById('name').value,
        amount2 = document.getElementById('mailto').value,
        amount3 = document.getElementById('sendText').value,
        person = confirm("هل تريد التسجيل بالبيانات التالية؟\n" + amount + "\n" + amount2 + "\n" + amount3);
    var massage = document.getElementById('span1');
    var massage2 = document.getElementById('span2');
    var massage3 = document.getElementById('span3');

    if (amount === "") {
        massage.innerHTML = "name is empty";
    } else if (amount2 === "") {
        massage2.innerHTML = "email  is empty";
    } else if (amount3 === "") {
        massage3.innerHTML = "Textarea is empty";
    } else if (amount && amount2 && amount3 != null) {
        if (person === true) {
            alert("massage has been sent "
            );
        } else {
            alert("the massage was not sent");
        }
    }
}
function ds3() {
    document.getElementById("em1").src = 'images//7.jpg';
    document.getElementById("em2").src = 'images//8.jpg';
    document.getElementById("em3").src = 'images//9.jpg';
}
function ds1() {
    document.getElementById("em1").src = 'images//1.jpg';
    document.getElementById("em2").src = 'images//2.jpg';
    document.getElementById("em3").src = 'images//3.jpg';
}
function ds2() {
    document.getElementById("em1").src = 'images//4.jpg';
    document.getElementById("em2").src = 'images//5.jpg';
    document.getElementById("em3").src = 'images//6.jpg';
}
  /*
function convear1() {
var amount = document.getElementById('name').value,
    massage= document.getElementById('span1');
    var amount2 = document.getElementById('mailto').value,
    massage2 = document.getElementById('span2');
var amount3 = document.getElementById('sendText').value,
    massage3 = document.getElementById('span3');
if (amount === ""){
    massage.innerHTML = "name is empty";
}else if (amount2 === "") {
    massage2.innerHTML = "email  is empty";
}else if (amount3 === "") {
    massage3.innerHTML = "Textarea is empty";
}else{
}
}
*/