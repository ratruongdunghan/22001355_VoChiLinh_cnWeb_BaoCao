function TimKiemSanPham() {
    var tuKhoa = document.getElementById("txtTimKiem").value.trim();

    if (tuKhoa == "") {
        alert("Vui lòng nhập từ khóa tìm kiếm!")
        return false;

    } else {
        return true;
    }
}