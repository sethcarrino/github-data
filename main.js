// GET: https://api.github.com/users/sethcarrino

function reqListener () {
  let data = JSON.parse(this.responseText);
  let info = `Hi, my name is ${data.name} and I am from ${data.location}.`;
  console.log(info);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/sethcarrino");
req.addEventListener("load", reqListener);
req.send();
