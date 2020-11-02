const message = document.getElementById("message")
const numberInput = document.getElementById("user-input")
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
            return
        } else if (secretNumber < getUserGuess()){
            setMessage("Too high!")
        }
        else{
            setMessage("Too low!")
        }
        guesses.push(getUserGuess())
        console.log(guesses)
        console.log(numberInput.value)
        document.getElementById("user-input").value = ""
    }
})
