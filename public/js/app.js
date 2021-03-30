const userForm = document.querySelector('form');
const userInput = document.querySelector('form input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

userForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const userInputValue = userInput.value;
    retrieveWeather(userInputValue);
}

fetch('http://puzzle.mead.io/puzzle').then(res => {
    res.json().then(data => {
        console.log(data)
    });
})

function retrieveWeather(value) {
    fetch(`/weather?address=${value}`).then(res => {
        res.json().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data.location);
                console.log(data.forecast);
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    })
}
