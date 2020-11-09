const message = document.getElementById("message")
const numberInput = document.getElementById("user-input")
const button = document.getElementById("button")
const secretNumber = Math.floor(Math.random()*101)
const guesses = []

function getUserGuess() {
    return (parseInt(numberInput.value)) 
}
function setMessage(msg){
    message.innerHTML = msg
}

document.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        if (secretNumber == getUserGuess()){
            setMessage("You got it!")
            message.style.color = "green"
        } else if (secretNumber < getUserGuess()){
            setMessage("Too high!")
            message.style.color = "red"
        }
        else{
            setMessage("Too low!")
            message.style.color = "red"
        }
        guesses.push(getUserGuess())
        console.log(guesses)
        numberInput.value = ""
    }
})