function checkform() {
  var user = document.getElementById("email");
  var user = document.getElementById("phone");
  
 

  if (email.value != "") {

  } else {
      alert("Vui lòng điền vào Email!");
      email.focus();
  }

  if (phone.value != "") {

  } else {
      alert("Vui lòng điền số điện thoại!");
      phone.focus();

  }

}

