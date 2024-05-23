// [x] russfeld
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("encrypt")?.addEventListener("click", function (event) {
    event.preventDefault();
    var password = prompt("Please enter the password");
    if (password) {
      var div = document.getElementById("encrypt-div").innerHTML;
      var encrypted = sjcl.encrypt(password, div);
      var encryptedJSON = JSON.stringify(encrypted);
      var base64 = btoa(encryptedJSON);
      document.getElementById("encrypt").style.display = "none";
      document.getElementById("encrypt-div").innerHTML = "<p>" + base64 + "</p>";
    }
  });

  document.getElementById("decrypt")?.addEventListener("click", function (event) {
    event.preventDefault();
    var password = prompt("Please enter the password");
    if (password) {
      var div = document.getElementById("encrypt-div").innerText;
      console.log(div);
      var encryptedJSON = atob(div);
      var encrypted = JSON.parse(encryptedJSON);
      var decrypted = sjcl.decrypt(password, encrypted);
      document.getElementById("decrypt").style.display = "none";
      document.getElementById("encrypt-div").innerHTML = "<p>" + decrypted + "</p>";
    }
  });
});