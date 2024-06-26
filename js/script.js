// JavaScript code to enhance user interaction if needed.
// For example, you can add interactivity to buttons or form validation here.

document.addEventListener('DOMContentLoaded', function() {
    // Example of adding a click event listener to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Button clicked!');
        });
    });
});
