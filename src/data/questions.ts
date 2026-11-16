import { Question } from "@/types/quiz";

export const questions: Question[] = [
  {
    id: "datenrechte-001",
    questionText:
      "Du willst wissen, welche Daten eine App über dich gespeichert hat. Was darfst du tun?",
    optionA: "Nichts. Die Daten gehören der App.",
    optionB: "Ich darf Auskunft verlangen.",
    optionC: "Ich darf fragen, muss aber dafür bezahlen.",
    correctOption: "B",
    explanation:
      "Du hast ein Recht auf Auskunft. Der Anbieter muss dir sagen, welche Daten er über dich gespeichert hat. Das kostet dich in der Regel nichts.",
    difficulty: "BEGINNER",
    category: "Teilhabe und Datenrechte",
  },
];
