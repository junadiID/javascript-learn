function buat_login() {
  var elem = document.getElementById("x");
  elem.parentElement.removeChild(elem);
  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan login";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  var form = document.createElement("form");
  element.appendChild(form);
  var label = document.createElement("label");
  label.innerHTML = "Username";
  form.appendChild(label);

  var input_userame = document.createElement("input");
  input_userame.type = "text";
  input_userame.name = "username";
  input_userame.className = "form_login";
  form.appendChild(input_userame);

  var label_pass = document.createElement("label");
  label_pass.innerHTML = "Password";
  form.appendChild(label_pass);
  var input_pass = document.createElement("input");
  input_pass.type = "password";
  input_pass.name = "password";
  input_pass.className = "form_login";
  form.appendChild(input_pass);

  var button_sub = document.createElement("button");
  button_sub.type = "submit";
  button_sub.className = "tombol_login";
  button_sub.innerHTML = "Submit";
  form.appendChild(button_sub);
}
