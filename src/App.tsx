import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
// types
import { QuestionsState, Answer } from "./API";
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: Answer;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gha, setGha] = useState("");
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions();
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      const answerObj = questions[number].answers?.find(
        (a) => a.value === answer
      );
      // Add score if answer is correct
      setScore((prev) => prev + (answerObj?.points || 0));
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = number + 1;

    console.log(nextQ === questions.length);

    if (nextQ === questions.length) {
      setGameOver(true);
      if (score < 150) {
        setGha("menor do que 4 gha");
      } else if (score >= 150 && score < 400) {
        setGha("entre 4 e 6 gha");
      } else if (score >= 400 && score < 600) {
        setGha("entre 6 e 8 gha");
      } else if (score >= 600 && score < 800) {
        setGha("entre 8 e 10 gha");
      } else {
        setGha("maior que 10 gha");
      }
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>ePegada</h1>
        <p>Qual é a tua pegada ecológica?</p>
        {gameOver || userAnswers.length === questions.length ? (
          <button className="start" onClick={startTrivia}>
            Começar
          </button>
        ) : null}
        {!gameOver ? <p className="score">Pontuação: {score}</p> : null}
        {loading ? <p>A carregar perguntas...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={questions.length}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== questions.length - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Próxima Pergunta
          </button>
        ) : null}
        {gameOver && score !== 0 ? (
          <div className="game-over">
            <h2>Fim de jogo</h2>
            <p>
              A tua pontuação foi de <strong>{score}</strong> pontos, com um
              consumo médio{" "}
              <strong>
                <a href="https://florestas.pt/saiba-mais/saiba-o-que-e-a-pegada-ecologica-e-como-calcula-la/">
                  {gha}
                </a>
              </strong>
              .
            </p>
            <p>
              A média portuguesa é de <strong>4,5 gha</strong>, e a média
              mundial é de <strong>2,7 gha</strong>.
              <br />
              Caso os teus valores sejam superiores a estas médias, é melhor que
              te ajudes a diminuir a pegada ecológica.
              <br />
              Seguem alguns links para te ajudar a diminuir a tua pegada
              ecológica:
            </p>
            <p>
              <a href="https://www.e-konomista.pt/dicas-para-reduzir-a-pegada-ecologica/">
                Pegada ecológica: 11 dicas para seguir e ser amigo do ambiente -
                E-konomista
              </a>
              <br />
              <a href="https://www.santander.pt/salto/como-reduzir-a-pegada-ecologica">
                Como reduzir a pegada ecológica? 20 dicas - Santander
              </a>
              <br />
              <a href="https://www.endesa.pt/particulares/news-endesa/sustentabilidade/dicas-reduzir-pegada-ecologica">
                10 dicas para reduzir a sua pegada ecológica - Endesa
              </a>
            </p>
          </div>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
