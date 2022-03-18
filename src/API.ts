export type Question = {
  answers: Answer[];
  question: string;
};

export type Answer = {
  value: string;
  points: number;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: Answer[] };

export const fetchQuizQuestions = async (): Promise<QuestionsState[]> => {
  const questions = [
    {
      question: "Quantas pessoas moram em tua casa?",
      answers: [
        { value: "1", points: 30 },
        { value: "2", points: 25 },
        { value: "3", points: 20 },
        { value: "4", points: 15 },
        { value: "5 ou mais", points: 10 },
      ],
    }, {
      question: "Qual o sistema de aquecimento da casa?",
      answers: [
        { value: "Gás Natural", points: 30 },
        { value: "Eletricidade", points: 40 },
        { value: "Gasóleo", points: 50 },
        { value: "Fontes Renováveis", points: 0 },
      ],
    }, {
      question: "Quantas torneiras há em tua casa?",
      answers: [
        { value: "Menos de 3", points: 5 },
        { value: "3 a 5", points: 10 },
        { value: "6 a 8", points: 15 },
        { value: "8 a 10", points: 20 },
        { value: "Mais de 10", points: 25 },
      ],
    }, {
      question: "Em que tipo de casa vives?",
      answers: [
        { value: "Apartamento", points: 20 },
        { value: "Moradia / Vivenda", points: 40 },
      ],
    }, {
      question: "Quantas refeições de carne ou peixe comes por semana?",
      answers: [
        { value: "Nenhuma", points: 0 },
        { value: "1 a 3", points: 10 },
        { value: "4 a 6", points: 20 },
        { value: "7 a 10", points: 35 },
        { value: "Mais de 10", points: 50 },
      ],
    }, {
      question: "Quantas refeições feitas em casa comes por semana?",
      answers: [
        { value: "Menos de 10", points: 25 },
        { value: "10 a 14", points: 20 },
        { value: "15 a 18", points: 15 },
        { value: "Mais de 18", points: 10 },
      ],
    }
  ]

  return questions.map((question: Question) => ({
    ...question,
    answers: question.answers,
  }))
};
