const ChatApp = document.getElementById("chat-box")

function messageServerResponse (message) {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(`${message} {Server Response}`)
            
        }, 1000);

    })
}


async function sendMessage () {
    const inputMessage = document.getElementById ("message-input")
    const message = inputMessage.value.trim()


    if(message !== " "){
        appendMessage(`You: ${message}`)


        try{
            const waitingforResponse = await messageServerResponse(message)
            appendMessage(`Server: ${ waitingforResponse }`)
        }
        catch( error) {
            appendMessage(`Error: ${error.message}`)
        }

        inputMessage.value = " ";






    }
}



function appendMessage(message) {
    const messageElement = document.createElement("p")
    messageElement.textContent = message
    ChatApp.appendChild(messageElement)
    ChatApp.scrollTop = ChatApp.scrollHeight
    
}












