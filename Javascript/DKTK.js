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
