const btn = document.querySelector(".btn");
const usersBox = document.querySelector(".users");

btn.addEventListener("click", getUsers);

function getUsers(){
  const http = new XMLHttpRequest();

  http.open("GET", "users.json");

  http.onload = function (){
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);
      console.log(users);

      let user = users.map(item=>{
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
    }
  }
  http.send();
}