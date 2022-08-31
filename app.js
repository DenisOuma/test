// Make an API call
fetch("https://reqres.in/api/users#")
	.then((res) => {
		if (res.ok) {
			console.log("Your Fetch request was successful");
		} else {
			console.log("Your Fetch request failed");
		}
		return res.json();
	})
	.then((users) => handleData(users))
	.catch((err) => console.log("The addres enterd is not valid"));

function handleData(users) {
	const usersList = users.data;
	return [...usersList].map((user) => createUser(user));
}

// Create a new user
function createUser(user) {
	const mydiv = document.createElement("div");
	mydiv.innerHTML = `
    <img src="${user.avatar}"/>
    <h3>${user.first_name} ${user.last_name}</h3>
    <p>${user.email}</p>
    `;
	users.appendChild(mydiv);
}

// Render y js on Page Load.
document.addEventListener("DOMContentLoaded", () => {
	users = document.getElementById("users");
	handleData();
	createUser();
});
