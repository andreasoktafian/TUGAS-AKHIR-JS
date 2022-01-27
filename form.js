function buat_login() {
  var elem = document.getElementById("X");
  elem.parentElement.removeChild(elem);

  var p = document.createElement("p");
  p.className = "tulisan_regis";
  p.innerHTML = "Silahkan Lakukan Registrasi";

  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  var form = document.createElement("FORM");
  element.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML = "Username";
  form.appendChild(label);

  var nama = document.createElement("input");
  nama.type = "text";
  nama.name = "name";
  nama.className = "form_regis";
  nama.placeholder = "Nama User ..";
  form.appendChild(nama);

  var label = document.createElement("label");
  label.innerHTML = "Nomor Handphone";
  form.appendChild(label);

  var hp = document.createElement("input");
  hp.type = "text";
  hp.name = "hp";
  hp.className = "form_regis";
  hp.placeholder = "Nomor Handphone ..";
  form.appendChild(hp);

  var label = document.createElement("label");
  label.innerHTML = "Username";
  form.appendChild(label);

  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_regis";
  input_username.placeholder = "Username atau email ..";
  form.appendChild(input_username);

  var label = document.createElement("label");
  label.innerHTML = "Password";
  form.appendChild(label);

  var input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_regis";
  input_password.placeholder = "Password ..";
  form.appendChild(input_password);

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.value = "DAFTAR SEKARANG";
  tombol.className = "tombol_regis";
  form.appendChild(tombol);
}
