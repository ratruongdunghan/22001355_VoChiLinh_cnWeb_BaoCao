function kiemTraTenDN(){
    let tenDN = document.getElementById("txtTenDN").value
    let errTenDN = document.getElementById("errTenDN")
    let reg_TenDN = /^[A-Za-z0-9_\.]{6,32}$/
    if(tenDN.trim()==""){
        errTenDN.innerHTML = "Tên đăng nhập bắt buộc nhập"
        return false;
    }
    if(!reg_TenDN.test(tenDN)){
        errTenDN.innerHTML = "Tên đăng nhập sai cú pháp"
        return false
    }
    errTenDN.innerHTML = "*"
    return true
}
function KTMatKhau(){
    var password = document.getElementById("txtPW").value
    var errPW = document.getElementById("errPW")
    var reg_PW = /[A-Za-z0-9_@]{6,}$/
    if(password.trim()=="" && !reg_PW.test(password)){
        errPW.innerHTML = "Mật khẩu bắt buộc nhập ít nhất 6 ký tự"
        return false;
    }else{
        errPW.innerHTML = "*"
        return true;
    }
}
function KTLai(){
    var pass2 = document.getElementById("txtlap").value
    var errpass2 = document.getElementById("errlap")
    var reg_PW = /[A-Za-z0-9_@]{6,}$/
    if(password.trim()=="" && !reg_PW.test(password)){
        errPW.innerHTML = "Mật khẩu bắt buộc nhập ít nhất 6 ký tự"
        return false;
    }else{
        errPW.innerHTML = "*"
        return true;
    }
}


function checkform() {
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

    var json = JSON.stringify(user);
    localStorage.setItem(txtTenDN, json);
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