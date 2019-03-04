// moved of pictures 
// resize

let collection = Array.from (document.getElementsByClassName ('scheme'))

collection.forEach (
  function (elem) {
    elem.onclick = function (event) {
      this.style.width = "900px";
    }
  }
)
collection.forEach (
  function (elem) {
    elem.onmouseout = function (event) {
      this.style.width = "600px";
    }
  }
)

// ______
// open link
// let btn = document.getElementsByClassName ("btn")
// btn.onclick = function (event) {
//   var textBlock = document.createElement("div")
//   document.body.appendChild(textBlock)
//   // textBlock.className = "menu"
// }