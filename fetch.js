const btn = document.querySelector(".btn");
const usersBox = document.querySelector(".users");

btn.addEventListener("click", getUsers);

function getUsers() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      let user = data.map(item=>{
        return(
          `
            <ul>
              <li>ID: ${item.id}</li>
              <li>Name: ${item.name}</li>
              <li>Age: ${item.age}</li>
              <li>Job: ${item.job}</li>
              <li>Email: ${item.email}</li>
            </ul>
            <hr>
          `
        )
      })
      usersBox.innerHTML = user;
    });
}
