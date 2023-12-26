function displaySentence(response) {
  console.log("sentence generated");

  new Typewriter("#sentence-output", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateSentence(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  console.log(userInput.value);

  let apiKey = "4916caba061520co8b34c1aft75528fb";
  let prompt = `Generate 3 German sentences based on ${userInput.value} with corresponding translation in English`;
  let context =
    "You are a beginner B1 German language student, you are looking to learn new sentences that can be used in daily life.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`generating sentence with ${prompt} and ${context}`);

  axios.get(apiURL).then(displaySentence);
}

let formElement = document.querySelector("#sentence-generator-form");
formElement.addEventListener("submit", generateSentence);
