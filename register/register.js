function pass(){
    var x = document.getElementById("password");
    if (x.type == "password"){
      x.type = "text";
    } 
    else{
      x.type = "password";
    }
    
    var x = document.getElementById("confirm_password");
    if (x.type == "password"){
      x.type = "text";
    } 
    else{
      x.type = "password";
    }    
}
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const submitButton = document.querySelector('form button[type="submit"]'); // Get submit button

submitButton.addEventListener('click', function(event) {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    alert('Passwords do not match! Please re-enter.');
    event.preventDefault(); // Prevent form submission
  }
});
