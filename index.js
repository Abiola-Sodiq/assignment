const body = document.body;
const div = document.createElement("div");
const div2 = document.createElement("div");
const text = document.createElement("h1");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const span3 = document.createElement("span");
const img = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
const img4 = document.createElement("img");
const img5 = document.createElement("img");
const img6 = document.createElement("img");
const img7 = document.createElement("img");
const img8 = document.createElement("img");
const img9 = document.createElement("img");

div.classList.add("maincontainer");
div2.classList.add("container");

body.append(div);
div.append(div2);
div2.append(text, span1, span2, span3);
span1.append(img, img2, img3);
span2.append(img4, img5, img6);
span3.append(img7, img8, img9);

text.innerText = "Sodiq Abiola Rukayat Picture Grid";

const imageSources = [
  "./images/abibi1.JPG",
  "./images/abibi2.JPG",
  "./images/abibi3.JPG",
  "./images/abibi4.JPG",
  "./images/abibi5.jpg",
  "./images/abibi6.JPG",
  "./images/abibi7.JPG",
  "./images/abibi8.JPG",
  "./images/abibi9.JPG",
];


const shuffledSources = imageSources.sort(() => Math.random() - 0.5);


img.setAttribute("src", shuffledSources[0]);
img2.setAttribute("src", shuffledSources[1]);
img3.setAttribute("src", shuffledSources[2]);
img4.setAttribute("src", shuffledSources[3]);
img5.setAttribute("src", shuffledSources[4]);
img6.setAttribute("src", shuffledSources[5]);
img7.setAttribute("src", shuffledSources[6]);
img8.setAttribute("src", shuffledSources[7]);
img9.setAttribute("src", shuffledSources[8]);
