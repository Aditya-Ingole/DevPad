let htmlinput = document.querySelector(".html-editor textarea");
let cssinput = document.querySelector(".css-editor textarea");
let jsinput = document.querySelector(".js-editor textarea");
let outputContainer = document.querySelector(".output-container");
let save = document.querySelector("#save");
let output = document.querySelector("#output");
let fullScreen = document.querySelector("#full");
let copy = document.querySelectorAll(".copy");

save.addEventListener("click", () => {
  output.contentDocument.body.innerHTML = htmlinput.value;
  output.contentDocument.head.innerHTML = `<style>${cssinput.value}</style>`;
  output.contentWindow.eval(jsinput.value);
});

fullScreen.addEventListener("click", () => {
  outputContainer.classList.toggle("full-out-screen");
});

copy.forEach((e)=>{

  e.addEventListener("click", () => {
    if(e.classList.contains("copy1")) {
      navigator.clipboard.writeText(htmlinput.value);
    // console.log(htmlinput.value);
    
    } else if(e.navigator.clipboard.contains("copy2")) {
      navigator.clipboard.writeText(cssinput.value);
    } else{
      navigator.clipboard.writeText(jsinput.value);
    }
  });
});
