function kiemTraTenDN() {
  let tenDN = document.getElementById("txtTenDN").value;
  let errTenDN = document.getElementById("errTenDN");
  let reg_TenDN = /^[A-Za-z0-9_\.]{6,32}$/;
  if (tenDN.trim() == "") {
    errTenDN.innerHTML = "Tên đăng nhập bắt buộc nhập";
    return false;
  }
  

  if (!reg_TenDN.test(tenDN)) {
    errTenDN.innerHTML = "Tên đăng nhập sai cú pháp";
    return false;
  }
  errTenDN.innerHTML = "*";
  return true;
}

function KTMatKhau() {
  var password = document.getElementById("txtPW").value;
  var pass2 = document.getElementById("txtlap").value;
  var errPW = document.getElementById("errPW");
  var errpass2 = document.getElementById("errlap");
  var reg_PW = /[A-Za-z0-9_@]{6,}$/;

  if (password.trim() === "" || !reg_PW.test(password)) {
    errPW.innerHTML = "Mật khẩu bắt buộc nhập ít nhất 6 ký tự";
    return false;
  } else {
    errPW.innerHTML = "*";
  }

  if (pass2.trim() === "" || !reg_PW.test(pass2)) {
    errpass2.innerHTML = "Mật khẩu bắt buộc nhập ít nhất 6 ký tự";
    return false;
  } else {
    errpass2.innerHTML = "*";
  }

  if (password !== pass2) {
    errpass2.innerHTML = "Mật khẩu nhập không khớp";
    return false;
  } else {
    alert("Mật khẩu bạn nhập hợp lệ!");
    return true;
  }
}

function signup(e) {
  e.preventDefault();

  var txtTenDN = document.getElementById("txtTenDN").value;
  var txtPW = document.getElementById("txtPW").value;
  var txtlap = document.getElementById("txtlap").value;
  var txtHoTen = document.getElementById("txtHoTen").value;
  var ns = document.getElementById("ns").value;
  var email = document.getElementById("email").value;

  var user = {
    txtTenDN: txtTenDN,
    txtPW: txtPW,
    txtlap: txtlap,
    txtHoTen: txtHoTen,
    ns: ns,
    email: email,
  };

  // Chuyển đổi đối tượng user thành chuỗi JSON
  var json = JSON.stringify(user);

  let jsondata = JSON.stringify(user);

  let uniqueKey = "user" + count;

  // Lưu vào localStorage với key là txtTenDN
  localStorage.setItem("txtTenDN", json);

  alert("Đăng ký thành công!");
}

function checkform() {
  var user = document.getElementById("txtTenDN");
  var user = document.getElementById("txtPW");
  var user = document.getElementById("txtlap");
  var user = document.getElementById("txtHoTen");

  if (txtTenDN.value != "") {
  } else {
    alert("Vui lòng điền vào ô đăng nhập!");
    txtTenDN.focus();
  }

  if (txtPW.value != "") {
  } else {
    alert("Vui lòng điền mật khẩu");
    txtPW.focus();
  }
}

function deleteform() {
  document.getElementById("txtTenDN").value = "";
  document.getElementById("txtPW").value = "";
  document.getElementById("txtlap").value = "";
  document.getElementById("txtHoTen").value = "";
  document.getElementById("ns").value = "";
  document.getElementById("email").value = "";
}

document.getElementById("signup").addEventListener("button", function (event) {
  event.preventDefault();
  var txtPW = document.getElementById("txtPW").value;
  var txtlap = document.getElementById("txtlap").value;

  if (txtPW == txtlap) {
    alert("Đăng ký thành công");
  } else {
    document.getElementById("errorText").style.display = "block";
  }
});
