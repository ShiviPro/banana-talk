const url = "https://api.funtranslations.com/translate/minion.json";

const loadingIconDiv = document.querySelector("#main-content__loading-icon");
const output = document.querySelector("#output");

const translate = event => {
  output.innerText = "";

  loadingIconDiv.innerHTML = `
  <svg class="loading-icon">
    <use xlink:href="#loading-icon" />
  </svg>
  `;

  setTimeout(() => {
    const userInput = document.querySelector("#user-input").value;
    fetch(`${url}?text=${userInput}`)
      .then(data => data.json())
      .then(json => {
        loadingIconDiv.innerHTML = `
        <svg>
          <use xlink:href="#minion-gets-an-idea" />
        </svg>
        `;
        setTimeout(() => {
          loadingIconDiv.innerHTML = ``;
          output.innerText = json.contents.translated;
        }, 800);
      });
  }, 500);
};

translateBtn = document.querySelector("#translate-btn");
translateBtn.addEventListener("click", translate);
