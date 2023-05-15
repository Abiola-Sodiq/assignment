const body = document.body;

const div = document.createElement("div");
const img = document.createElement("img");

img.setAttribute("src", "https://wallpapers.com/images/hd/funny-dog-wallpaper-t0etwwk8zmw7nbl8.jpg" )
console.log(img);
div.classList.add("container")
body.append(div)
div.append(img)
