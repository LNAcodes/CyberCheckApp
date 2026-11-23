export type OptionLetter = "A" | "B" | "C";
export type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export interface QuestionSet {
  id: string;
  title: string;
  description: string;
}
export interface Question {
  id: string;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  correctOption: OptionLetter;
  explanation: string;
  difficulty: Difficulty;
  setId: string;
}
