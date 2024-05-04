function checkform() {
    var user = document.getElementById("user");
    var user = document.getElementById("password");
    var user = document.getElementById("password2");

    if (user.value != "") {

    } else {
        alert("Vui lòng nhập tên đăng nhập!");
        user.focus();
    }

}

function signup(e) {
    event.preventDefault();
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
  

    var user = {
        username : username,
        password : password,
        password2 : password2,

    };
    var json = JSON.stringify(user);
    localStorage.setItem(user, json);
    alert("Đăng ký thành công!")
}

