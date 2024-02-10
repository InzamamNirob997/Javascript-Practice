document.addEventListener('DOMContentLoaded', () => {
    const CardAdding = document.getElementById("cardContainer")




// Fetch data from RESTful API with promises:

const fetchData = () => {
    //create a promise
    return new Promise ((resolve, reject)=>{
        //fetch data
        fetch('https://jsonplaceholder.typicode.com/posts')
        //call response from fetch data
        .then(response =>{
            // if response id ok
            if(!response.ok){
                // create a error promise during load
                throw new Error("failed to fetch data")
            }
            // or else if there was error free then give me the data in json format
            return response.json()

        })
        // data should be resolve in then in console 
        .then(data => resolve (data))
        // if error then reject data and shows the error in console
        .catch(error => reject (error))



    })

}
 // Render data in card format

 
const renderData = () => {
    fetchData() // Call fetchData function to get the data
    .then(data => {
        data.forEach(item => {
            const card = createCard(item);
            CardAdding.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error)); // Handle errors if fetching data fails
}







 // Create a card for each item:

 const createCard = item =>{

    const Card = document.createElement("div")
    Card.classList.add("Card")

    const title = document.createElement("h2")
    title.textContent = item.title

    const body = document.createElement("p")
    body.textContent = item.body

    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("buttonContainer")

    const editButton = createButton('Edit');
    editButton.onclick = () => editPost(item.id);

    const deleteButton = createButton("Delete")
    deleteButton.onclick = () => deletePost(item.id)

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);



    Card.appendChild(title)
    Card.appendChild(body)
    Card.appendChild(buttonContainer)


    return Card;

 }

 const createButton = text => {
    const button = document.createElement("button")
    button.textContent = text
    button.classList.add("button")

    return button

 }

 // Function to edit post

 const editPost = postId => {


    const newTitle = prompt("Enter new Title: ")
    const newBody = prompt ("Enter new Body: ")

    if(newTitle !== null && newBody !== null){
        const updatePost = {title: newTitle, body: newBody}
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {

        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatePost)

        })
        .then(response =>{
            if(response.ok){
                alert("Data has been sucessfully dispatched!")
                CardAdding.innerHTML = " ";
                renderData()
            } else{
                alert("Data has not sucesfully passed")
            }
        })
        .catch(error => console.error("Error has been detected : ", error))
    }
 }

 const deletePost = postId => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        alert('Post deleted successfully');
        CardAdding.innerHTML = ''; // Clear existing cards
        renderData(); // Re-render cards
      } else {
        alert('Failed to delete post');
      }
    })
    .catch(error => console.error('Error deleting post:', error));
  };

  // Initial render of data
  renderData();
});