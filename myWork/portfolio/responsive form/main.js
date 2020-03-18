// Listen for form submition
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
  e.preventDefault();

// get values
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

console.log('name');
}


// func to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
