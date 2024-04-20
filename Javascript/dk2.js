function TimKiemSanPham() {
    var tuKhoa = document.getElementById("txtTimKiem").value.trim();

    if (tuKhoa == "") {
        alert("Vui lòng nhập từ khóa tìm kiếm!")
        return falsel;

    } else {
        return true;
    }
}
