// [x] russfeld
$(document).ready(function(){
  $('#encrypt').click(function(event){
    event.preventDefault();
    var password = prompt("Please enter the password");
    if (password) {
      var div = $('#encrypt-div').html();
      var encrypted = sjcl.encrypt(password, div);
      var encryptedJSON = JSON.stringify(encrypted);
      var base64 = btoa(encryptedJSON);
      $('#encrypt').hide();
      $('#encrypt-div').html("<p>" + base64 + "</p>");
    }
  });
  $('#decrypt').click(function(event){
    event.preventDefault();
    var password = prompt("Please enter the password");
    if (password) {
      var div = $('#encrypt-div').text();
      var encryptedJSON = atob(div);
      var encrypted = JSON.parse(encryptedJSON);
      var decrypted = sjcl.decrypt(password, encrypted);
      $('#encrypt').hide();
      $('#encrypt-div').html(decrypted);
    }
  });
});
