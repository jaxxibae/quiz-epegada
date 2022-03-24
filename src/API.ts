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
    }, {
      question: "Costumas comprar alimentos produzidos localmente?",
      answers: [
        { value: "Sim", points: 25 },
        { value: "Não", points: 125 },
        { value: "Ás vezes", points: 50 },
        { value: "Raramente", points: 100 },
      ],
    }, {
      question: "Que tipo de meio de transporte tens?",
      answers: [
        { value: "Motociclo", points: 35 },
        { value: "Baixa cilindrada (até 1200 c.c.)", points: 60 },
        { value: "Média e alta cilindrada (acima de 1200 c.c.)", points: 75 },
        { value: "Carrinha / Carro", points: 100 },
        { value: "Todo o Terreno", points: 130 },
        { value: "Não tenho / Uso transportes públicos", points: 0 },
      ],
    }, {
      question: "Como vais para o emprego / escola?",
      answers: [
        { value: "Por carro / taxi", points: 60 },
        { value: "Por boleia", points: 30 },
        { value: "Por transportes públicos", points: 15 },
        { value: "Por bicicleta / trotinete ou a pé", points: 0 },
      ],
    }, {
      question: "Quantos quilómetros percorres de carro para chegar ao emprego / escola?",
      answers: [
        { value: "Não tenho carro", points: 0 },
        { value: "Menos de 10", points: 10 },
        { value: "Entre 10 e 30", points: 20 },
        { value: "Entre 30 e 50", points: 30 },
        { value: "Entre 50 e 100", points: 60 },
        { value: "Mais de 100", points: 80 },
      ],
    }, {
      question: "Aonde foste nas últimas férias?",
      answers: [
        { value: "A lado nenhum", points: 0 },
        { value: "Fiquei em Portugal Continental", points: 10 },
        { value: "Fui a Espanha (Continente)", points: 20 },
        { value: "Fiquei pela Europa, países africanos próximos, ou fui à Madeira ou aos Açores", points: 30 },
        { value: "Saí da Europa ou fui para longe", points: 50 },
      ],
    }, {
      question: "Em quantos fins de semana é que viajas de carro (mínimo 20km de distância)?",
      answers: [
        { value: "0", points: 0 },
        { value: "1 a 3", points: 10 },
        { value: "4 a 6", points: 20 },
        { value: "7 a 9", points: 30 },
        { value: "10 ou mais", points: 40 },
      ],
    }, {
      question: "Quantas compras significativas fizeste (ou os teus pais) no ano passado? (Ex: eletrodomésticos, computadores, TVs, etc.)",
      answers: [
        { value: "Nenhuma", points: 0 },
        { value: "1 a 3", points: 15 },
        { value: "4 a 6", points: 30 },
        { value: "7 ou mais", points: 45 },
      ],
    }, {
      question: "Costumas comprar produtos de baixo consumo de energia?",
      answers: [
        { value: "Sim", points: 0 },
        { value: "Não", points: 25 },
      ],
    }, {
      question: "Procuras reduzir a produção de resíduos? (Ex: evitas produtos com muita embalagem, reutilizas o papel, evitas sacos de plástico, etc.)",
      answers: [
        { value: "Sempre", points: 0 },
        { value: "Ás vezes", points: 10 },
        { value: "Raramente", points: 20 },
        { value: "Nunca", points: 30 },
      ],
    }, {
      question: "Praticas compostagem de resíduos orgânicos?",
      answers: [
        { value: "Sempre", points: 0 },
        { value: "Ás vezes", points: 10 },
        { value: "Nunca", points: 20 },
      ],
    }, {
      question: "Costumas separar o lixo e colocá-lo no ecoponto para que seja reciclado?",
      answers: [
        { value: "Sempre", points: 0 },
        { value: "Ás vezes", points: 10 },
        { value: "Raramente", points: 20 },
        { value: "Nunca", points: 25 },
      ]
    }, {
      question: "Quantos sacos de lixo produzes por semana?",
      answers: [
        { value: "1", points: 10 },
        { value: "2", points: 20 },
        { value: "3 ou mais", points: 30 },
      ],
    }
  ]

  return questions.map((question: Question) => ({
    ...question,
    answers: question.answers,
  }))
};
