// GET: https://api.github.com/users/sethcarrino
// Hi, my name is ${data.name} and I am from ${data.location}.
let content = document.querySelector("#wrapper")

function reqListener() {
  let data = JSON.parse(this.responseText);
  let info = `
  <h1>${data.name}</h1>
  <div id="border">

  <div id="container">
    <div class="profileInfo">
      <h3>The Basics</h3>
      <p class="desc">Name: <span class="descInfo">${data.name}</span></p>
      <p class="desc">GitHub URL: <span class="descInfo"><a href=""${data.html_url}" alt="GitHub URL">${data.html_url}</a></span></p>
      <p class="desc">Email: <span class="descInfo">sethcarrino@gmail.com</span></p>
      <p class="desc">Company: <span class="descInfo">The Iron Yard</span></p>
      <p class="desc">Website: <span class="descInfo"><a href="${data.blog}" alt="${data.name}'s Site'">${data.blog}</a></span></p>
    </div>

    <div class="profileAbout">
      <h3>The Story</h3>
      <p class="bio">${data.bio}</p>
    </div>

    <div class="profileImage">
      <img src="${data.avatar_url}"
    </div>
    </div>
  </div>
  `;

  content.innerHTML = info

}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/sethcarrino");
req.addEventListener("load", reqListener);
req.send();
