// .questionContainer = conjunto de div de perguntas + div de respostas)
// .questionClosed = div de perguntas + botões
// .questionOpened = div de respostas
// .openAnswer = botão de abrir
// .closeAnswer = botão de fechar
// .hidden = classe que some div de respostas

// pega todas as perguntas ao invés da 1º (querySelector);
const allQuestions = document.querySelectorAll(".questionClosed");

// faz um loop por todas as perguntas, 'questionSpace' é cada uma;
allQuestions.forEach((questionSpace) => {
  // vê se houve um 'click' nas perguntas (e não em qual)
  questionSpace.addEventListener("click", () => {
    // 2º loop que vê qual pergunta gerou o 'click';
    allQuestions.forEach(function (otherQuestionSpace) {
      // esconde a resposta caso essa não seja a pergunta feita;
      if (otherQuestionSpace !== questionSpace) {
        const otherContainer = otherQuestionSpace.closest(".questionContainer");

        const otherBtnOpenAnswer = otherContainer.querySelector(".openAnswer");
        const otherBtnCloseAnswer =
          otherContainer.querySelector(".closeAnswer");
        const otherAnswerSpace =
          otherContainer.querySelector(".questionOpened");

        otherAnswerSpace.classList.add("hidden");
        otherBtnOpenAnswer.classList.remove("hidden");
        otherBtnCloseAnswer.classList.add("hidden");
      }
    });

    // mostra a resposta caso seja a pergunta feita;

    const container = questionSpace.closest(".questionContainer");
    const btnOpenAnswer = container.querySelector(".openAnswer");
    const btnCloseAnswer = container.querySelector(".closeAnswer");
    const answerSpace = container.querySelector(".questionOpened");

    answerSpace.classList.toggle("hidden");
    btnOpenAnswer.classList.toggle("hidden");
    btnCloseAnswer.classList.toggle("hidden");
  });
});
