var typed = new Typed(".text" ,{
    strings:["Frontend Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});

function getValue() {
    var inputElement = document.getElementById("myInput");
    var placeholderValue = inputElement.getAttribute("placeholder");
    alert("Placeholder value: " + placeholderValue);
  }

function SubmitHandler(event) {
    event.preventDefault(); 
    const name = document.getElementById('myName').value;
    const email = document.getElementById('myEmail').value;
    const subject = document.getElementById('mySubject').value;
    const message = document.getElementById('myMessage').value;

    console.log('Form Submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    document.querySelector('.contact-form form').reset();
}
// Get the hamburger menu and navbar
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Add an event listener to toggle the 'active' class on the navbar
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
