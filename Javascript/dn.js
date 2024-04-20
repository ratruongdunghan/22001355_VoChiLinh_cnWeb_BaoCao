var inputs = document.forms['register'].getElementsByTagName('input');
  var run_onchange = false;
  function valid(){
   var errors = false;
   var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
   for(var i=0; i<inputs.length; i++){
    var value = inputs[i].value;
    var id = inputs[i].getAttribute('id');
    

    var span = document.createElement('span');

  
    var p = inputs[i].parentNode;
    if(p.lastChild.nodeName == 'SPAN') {p.removeChild(p.lastChild);}
    
    if(value == ''){
     span.innerHTML ='Thông tin được yêu cầu';
    }else{
 
     if(id == 'email'){
      if(reg_mail.test(value) == false){ span.innerHTML ='Email không hợp lệ (ví dụ: abc@gmail.com)';}
      var email =value;
     }
     if(id == 'confirm_email' && value != email){span.innerHTML ='Email nhập lại chưa đúng';}

     if(id == 'password'){
      if(value.length <6){span.innerHTML ='Password phải từ 6 ký tự';}
      var pass =value;
     }
 
     if(id == 'confirm_pass' && value != pass){span.innerHTML ='Password nhập lại chưa đúng';}

     if(id == 'phone' && isNaN(value) == true){span.innerHTML ='Số điện thoại phải là kiểu số';}
    }

    if(span.innerHTML != ''){
     inputs[i].parentNode.appendChild(span);
     errors = true;
     run_onchange = true;
     inputs[i].style.border = '1px solid #c6807b';
     inputs[i].style.background = '#fffcf9';
    }
   }
   if(errors == false){alert('Đăng ký thành công');}
   return !errors;
  }
 
  var register = document.getElementById('submit');
  register.onclick = function(){
   return valid();
  }
 
   for(var i=0; i<inputs.length; i++){
    var id = inputs[i].getAttribute('id');
    inputs[i].onchange = function(){
     if(run_onchange == true){
      this.style.border = '1px solid #999';
      this.style.background = '#fff';
      valid();
     }
    }
   }
