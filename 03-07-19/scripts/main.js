console.log('Script is ready!')

const emailElement = document.getElementById('myEmail');
const passElement = document.getElementById('myPassword');

function printValues() {
    // console.log({emailElement, passElement})
    console.log(emailElement.value, passElement.value)
}