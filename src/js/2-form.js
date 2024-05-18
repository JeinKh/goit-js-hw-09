const formData = {
    email: "",
    message: ""
};


const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

function saveToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email || "";
    messageInput.value = parsedData.message || "";
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    }
}


form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
});


document.addEventListener('DOMContentLoaded', loadFromLocalStorage);


form.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
    alert ('Fill please all fields');
    return;
    }


    console.log(formData);


    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
    form.reset();
});