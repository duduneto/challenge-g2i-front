export type QuestionT = {
    category: string,
    type: boolean,
    difficulty: string,
    question: string,
    correct_answer: 'True' | 'False',
    incorrect_answers: 'True' | 'False'[],
}

export type GetQuestionsT = {
    response_code: number,
    results: QuestionT[],
}