const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

const translate = (event) => {
  let userInput = document.querySelector("#user-input").value;

  let output = document.querySelector("#output");

  fetch(url + "?text=" + userInput)
    .then((data) => data.json())
    .then((json) => (output.innerText = json.contents.translated));
};

translateBtn = document.querySelector("#translate-btn");
translateBtn.addEventListener("click", translate);
