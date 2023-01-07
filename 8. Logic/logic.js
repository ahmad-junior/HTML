// Buttons
const submitName = document.getElementById('click-event-name-submit'),
      showTimeIn = document.getElementById('click-event-time');

// Form
const form = document.querySelector('form');
// Input
const nameInput = document.getElementById('input-field');

// Paragraphs
const showName = document.getElementById('box-it'),
      showTimeOut = document.getElementById('time-show');

// Event Listeners
// Submit User Name 
submitName.addEventListener('click', () =>{
    if(nameInput.value == ""){
        showName.innerHTML = "Please enter a name";
    }else{
        showName.innerHTML = "Hello " + nameInput.value;
        form.reset();
    }
});

// Show Time
showTimeIn.addEventListener('click', () =>{
    showTimeOut.innerHTML = "Time: " + new Date();
});