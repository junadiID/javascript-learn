function buat_login() {
  var elem = document.getElementById("X");
  elem.parentElement.removeChild(elem);
  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan login";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  var form = document.createElement("form");
  element.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML = "Nama user";
  form.appendChild(label);
  var input_name = document.createElement("input");
  input_name.type = "text";
  input_name.name = "username";
  input_name.placeholder = "Nama User..";
  input_name.className = "form_login";
  form.appendChild(input_name);

  var labelphone = document.createElement("label");
  labelphone.innerHTML = "Nomor Handphone";
  form.appendChild(labelphone);
  var nomor_hand = document.createElement("input");
  nomor_hand.type = "number";
  nomor_hand.name = "nomorhan";
  nomor_hand.className = "form_login";
  nomor_hand.placeholder = "Nomor Handphone..";
  form.appendChild(nomor_hand);

  var labeluserna = document.createElement("label");
  labeluserna.innerHTML = "Username";
  form.appendChild(labeluserna);
  var input_userame = document.createElement("input");
  input_userame.type = "text";
  input_userame.name = "username";
  input_userame.placeholder = "Username atau Email..";
  input_userame.className = "form_login";
  form.appendChild(input_userame);

  var label_pass = document.createElement("label");
  label_pass.innerHTML = "Password";
  form.appendChild(label_pass);
  var input_pass = document.createElement("input");
  input_pass.type = "password";
  input_pass.name = "password";
  input_pass.placeholder = "Password..";
  input_pass.className = "form_login";
  form.appendChild(input_pass);

  var button_sub = document.createElement("button");
  button_sub.type = "submit";
  button_sub.className = "tombol_login";
  button_sub.innerHTML = "Submit";
  form.appendChild(button_sub);
}
