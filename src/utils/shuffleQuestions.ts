import type { Question } from "@/types/quiz";
// kopiere die Liste
// gehe von der letzten Position bis zur zweiten:
// ziehe eine zufällige Position zwischen 0 und der aktuellen
// tausche die Karte an der aktuellen Position mit der an der gezogenen
// gib die gemischte Kopie zurück

export function shuffleQuestions(originalQuestions: Question[]): Question[] {
  const shuffledQuestions = [...originalQuestions];

  for (
    let currentPosition = shuffledQuestions.length - 1;
    currentPosition > 0;
    currentPosition = currentPosition - 1
  ) {
    const randomPosition = Math.floor(Math.random() * (currentPosition + 1));

    const questionAtCurrentPosition = shuffledQuestions[currentPosition];
    shuffledQuestions[currentPosition] = shuffledQuestions[randomPosition];
    shuffledQuestions[randomPosition] = questionAtCurrentPosition;
  }

  return shuffledQuestions;
}
