function giaTri() {
  var txtNumber = document.getElementById("txtNumber").value * 1;
  var kq = " ";
  for (var i = 1; i <= txtNumber; i++) {
    kq += i + " ";
  }
  var result = "Kết quả là: " + kq;
  document.getElementById(" infoNumber").innerHTML = result;
}
