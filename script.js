const emailText = document.querySelector("#email");
const passwordText = document.querySelector("#password");

function Login() {
  console.log(emailText.value);
  console.log(passwordText.value);

  if (emailText.value !== "" && passwordText.value !== "") {
    window.location.href = "http://localhost:5501/pages/category.html";
  }
  return false;
}

const quizHtml = [
  {
    question: "HTML means Hyper Text Marking Language?",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question: "HTML elements are represented by?",
    options: ["HTML Elements", "<> tags", "Web pages"],
    correctAnswer: "<> tags",
  },
  {
    question: "Attributes are placed?",
    options: [
      "Attributes are placed",
      "in the opening tag",
      "in the closing tag",
    ],
    correctAnswer: "in the opening tag",
  },
  {
    question: "To create a form, we use the tag <form>.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question: "he tag responsible for creating a link is",
    options: ["a", "ahref", "asrc"],
    correctAnswer: "a",
  },
];

const quizCss = [
  {
    question:
      "With internal CSS, you can add CSS code directly to your < body > section.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question: "The external CSS file is imported using the tag link.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question: "The default display of an element is:",
    options: ["inline or block", "none"],
    correctAnswer: "inline or block",
  },
  {
    question: "In Flexbox, the parent element is called:",
    options: ["Flex container", "Flex parent", "Flex Block"],
    correctAnswer: "Flex container",
  },
  {
    question: "Display: flex...",
    options: [
      "Enables a flex context for all its direct children",
      "Enables a flex context for the parent element",
    ],
    correctAnswer: "Enables a flex context for all its direct children",
  },
];

const quizJs = [
  {
    question:
      "Every declared function has a return statement even if it is not written.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question: "The script tag must be placed in the head tag.",
    options: ["True", "False"],
    correctAnswer: "False ",
  },
  {
    question:
      "Every declared function has a return statement even if it is not written.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    question: "The attributes are only limited to DOM.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question:
      "The getAttribute method returns null when it does not find any attribute with the specified name",
    options: ["True", "False"],
    correctAnswer: "True",
  },
];

let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", displayQuestion);

function displayQuestion() {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const feedbackElement = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");

  // Clear previous question and options
  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";
  feedbackElement.textContent = "";

  // Display the current question
  const currentQuestionData = quizData[currentQuestion];
  questionContainer.textContent = currentQuestionData.question;

  // Display answer options
  currentQuestionData.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;
    optionElement.addEventListener("click", function () {
      checkAnswer(option);
    });

    optionsContainer.appendChild(optionElement);
  });

  scoreElement.textContent = `Score: ${score}`;
}
