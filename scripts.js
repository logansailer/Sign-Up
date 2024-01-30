function check() {
    if (document.querySelector('#password').value == 
    document.querySelector('#confirm-password').value) {
        console.log("true")
        document.querySelector('#submit').disabled = false;
    } else {
        document.querySelector('#submit').disabled = true;
        alert("passwords do not match")
    }
};
    
const submit = document.querySelector(".submit")
submit.addEventListener("click", check);