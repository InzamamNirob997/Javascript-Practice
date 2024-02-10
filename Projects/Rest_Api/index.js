document.addEventListener("DOMContentLoaded", () => {

    const DataFromHtml = document.getElementById('postList')
 // Function to fetch and render posts
    const asynFunctionCreate = async () => {

        try{
            const resposne = await fetch("https://jsonplaceholder.typicode.com/posts")
            const datas = await resposne.json()


            DataFromHtml.innerHTML = ' '
            datas.forEach(renderpost)
        } catch ( error){
            console.log('Error: ', error)
        }
    }

    // Function to render a post card dynamically with JS

    const renderpost = data => {
        const newPostCard = document.createElement('div')
        newPostCard.classList.add("newPostCard")
        newPostCard.innerHTML = `
        <h3>Title: ${data.title}</h3>
        <p>Body: ${data.body}</p>
        <button onclick="editPost(${data.id})">Edit</button>
        <button onclick="deletePost(${data.id})">Delete</button>
        
        
        
        `
        DataFromHtml.appendChild(newPostCard);
    
    }
  // Function to handle post deletion

  window.deletePost = async postId => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {

        method: "DELETE"
        })
        if(response.ok){
            asynFunctionCreate()
        } else {
            alert("failed to load")

        } 
    }
    catch (error){
        console.log("Error: ", error)

    }
  }






  // Function to handle post editing

  window.editPost = async postId => {
    const newTitle = prompt("Enter new Title: ")
    const newBody = prompt ("Enter new Body: ")


    if(newTitle !== null && newBody !== null){
        const updatePost ={title: newTitle, body: newBody}
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatePost)



            })
            if(response.ok){
                asynFunctionCreate()
            } else {
                alert("Failed to put")
    
            } 


        }
        catch (error){
            console.log("Error: ", error)
    
        }




    }



  }
 








asynFunctionCreate()
});



