// .questionContainer (espaço com espaço de perguntas, e espaço de respostas)
// .questionClosed (espaço com pergunta, e botão de abrir resposta ou fechar resposta)
// .questionOpened (espaço com resposta)
// .openAnswer (botão de abrir resposta)
// .closeAnswer (botão de fechar resposta)
// .hidden (classe que some o espaço com resposta)

// Pega todas as perguntas ao invés de sempre a 1º (querySelector), e vê qual delas (forEach) causou o evento "click";
const allQuestions = document.querySelectorAll(".questionClosed");

// "questionSpace" é cada pergunta, e o addEventListener vai pegar especificamente a que teve causou o "click";
allQuestions.forEach((questionSpace) => {
  questionSpace.addEventListener("click", () => {
    /* mesmo sabendo qual pergunta causou o evento, não sabemos pra qual resposta devemos ir, por isso,
    devemos pegar exatamente o container (pergunta + reposta) da pergunta, e a partir dele chegar a resposta.
    Para saber qual o container, devemos subir um nível da hierarquia do HTML, pra isso, usamos o "closest"
    */
    const container = questionSpace.closest(".questionContainer");

    // pega os objetos do container específico da pergunta feita;
    const btnOpenAnswer = container.querySelector(".openAnswer");
    const btnCloseAnswer = container.querySelector(".closeAnswer");
    const answerSpace = container.querySelector(".questionOpened");

    // "toggle" faz o contrário do que tem, ou seja, se tiver um "hidden" ele tira, senão ele coloca;
    answerSpace.classList.toggle("hidden");
    btnOpenAnswer.classList.toggle("hidden");
    btnCloseAnswer.classList.toggle("hidden");
  });
});
