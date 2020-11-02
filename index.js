const message = document.getElementById("message")
const numberInput = document.getElementById("user-input")
const randomNumber = Math.round(Math.random()*100)

function getUserGuess() {
    return (parseInt(numberInput.value)) 
}
function setMessage(msg){
    message.innerHTML = msg
}

document.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        if (randomNumber == getUserGuess()){
            setMessage("You got it!")
            return
        } else if (randomNumber < getUserGuess()){
            setMessage("Too high!")
        }
        else{
            setMessage("Too low!")
        }
    }
})
