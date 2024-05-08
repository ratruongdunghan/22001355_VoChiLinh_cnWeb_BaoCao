function checkform() {
  var user = document.getElementById("email");
  var user = document.getElementById("txtPW");
  
 

  if (email.value != "") {

  } else {
      alert("Vui lòng điền vào Email!");
      email.focus();
  }

  if (txtPW.value != "") {

  } else {
      alert("Vui lòng nhập mật khẩu");
      txtPW.focus();

  }

}

