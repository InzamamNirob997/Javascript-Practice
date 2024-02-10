// script.js

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Array of user objects, each with an ID, name, and email
    const users = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    ];
  
    // Get the HTML element with the ID 'userList'
    const userListContainer = document.getElementById('userList');
  
    // Iterate over each user in the 'users' array
    users.forEach(({ id, name, email }) => {
      // Create a new <div> element for each user card
      const userCard = document.createElement('div');
  
      // Add the 'userCard' class to the created <div> element
      userCard.classList.add('userCard');
  
      // Set the inner HTML of the user card with the user's information
      userCard.innerHTML = `
        <h3>User_ID: ${id}</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
      `;
  
      // Append the user card to the 'userList' container
      userListContainer.appendChild(userCard);
    });
  });
  



