import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// types
import { QuestionsState, Answer } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

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
      const answerObj = questions[number].answers?.find((a) => a.value === answer);
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

    console.log(nextQ === questions.length)

    if (nextQ === questions.length) {
      setGameOver(true);
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
          <button className='start' onClick={startTrivia}>
            Começar
          </button>
        ) : null}
        {!gameOver ? <p className='score'>Pontuação: {score}</p> : null}
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
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== questions.length - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Próxima Pergunta
          </button>
        ) : null}
        {gameOver && score !== 0 ? (
          <div className='game-over'>
            <h2>Fim de jogo</h2>
            <p>
              A tua pontuação foi de <strong>{score}</strong> pontos.
            </p>
            </div>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
