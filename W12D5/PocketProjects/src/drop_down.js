const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/"
};

class Dropdown {
  constructor(){
  }

  dogLinkCreator () {
    const arr = [];
    for(let dog in dogs){
      let a = document.createElement("a")
      a.innerHTML = dog
      a.setAttribute("href", dogs[dog]);
      let ele = document.createElement("li")
      ele.classList.add ("dog-link");
      ele.appendChild(a)
      arr.push(ele)
    }
    return arr;
  }
  
  attachDogLinks () {
    let dogLinks = this.dogLinkCreator();
    let dropDown = document.getElementsByClassName("drop-down-dog-list")[0];
    // debugger
    dogLinks.forEach(e => {
      dropDown.append(e);
    })
  }
}



const dropDown = document.getElementsByClassName("drop-down-dog-nav")[0];
const droppedDown = document.getElementsByClassName("drop-down-dog-nav")[0];
const handleenter = function(e){
  // debugger
  const links = Array.from(document.getElementsByClassName("dog-link"));
  // for(let i=0; i < links.length; i++){
  for(let i in links){
    links[i].classList.add("open");
  }
  if (e.target && e.target.nodeName == "li") {
    console.log(e.target.id + " in");
  }
};

const handleleave = function (e) {
  // debugger
  // if (e.target === document.getElementsByClassName("drop-down-dog-list")[0]) {
    const links = Array.from(document.getElementsByClassName("dog-link"));
    // for(let i=0; i < links.length; i++){
    for (let i in links) {
      links[i].classList.remove("open");
    } 
  // } 

};

dropDown.addEventListener("mouseover", handleenter);
droppedDown.addEventListener("mouseout", handleleave)
// debugger

module.exports = Dropdown;