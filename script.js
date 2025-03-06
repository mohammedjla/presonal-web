// script.js - وظائف الموقع لمحمد جلال

// تفعيل الوضع الليلي
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// التحقق من نموذج التواصل
function validateForm() {
    const name = document.contactForm.name.value;
    const email = document.contactForm.email.value;
    const message = document.contactForm.message.value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}
