const menuButton = document.querySelector('.menu');
const menuCont = document.querySelector('.menu-container');
menuButton.addEventListener('click', () => {
    menuCont.classList.toggle('active');
});
const contactForm = document.querySelector('.contact-form');
if(contactForm){
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(firstName === "" || lastName === "" || email === "" || message === ""){
        alert("please fill all the required fields marked with *");
        return;
    }
     if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
     }

    console.log("Form submitted Successfuly:", {firstName, lastName, email, message});
    alert(`Thank you, ${firstName} ! your message has been sent.`);
    contactForm.reset();
});
}