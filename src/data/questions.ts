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
  {
    id: "privatsphaere-001",
    questionText:
      "Eine Freundin postet ein Foto von dir, ohne dich zu fragen. Darf sie das?",
    optionA: "Ja, wer das Foto macht, darf alles damit tun.",
    optionB: "In der Regel nein. Sie braucht deine Erlaubnis.",
    optionC: "Ja, wenn du gut darauf aussiehst.",
    correctOption: "B",
    explanation:
      "Du hast ein Recht am eigenen Bild. Du kannst sie bitten, das Foto zu löschen.",
    difficulty: "BEGINNER",
    category: "Privatsphäre und Überwachung",
  },
  {
    id: "sicherheit-001",
    questionText:
      "Jemand schickt dir immer wieder gemeine Nachrichten. Was hilft?",
    optionA: "Genauso gemein zurückschreiben.",
    optionB: "Alles löschen und niemandem etwas sagen.",
    optionC:
      "Screenshots machen, die Person blockieren und jemandem davon erzählen.",
    correctOption: "C",
    explanation:
      "Screenshots sind Beweise. Du musst das nicht allein aushalten. Erzähl es einer Person, der du vertraust.",
    difficulty: "BEGINNER",
    category: "Sicherheit und Online-Belästigung",
  },
  {
    id: "algorithmen-001",
    questionText: "Wer bestimmt, welche Videos dir vorgeschlagen werden?",
    optionA: "Ein Programm, das auswertet, was du dir ansiehst.",
    optionB: "Ein Mensch, der dich beobachtet.",
    optionC: "Der Zufall.",
    correctOption: "A",
    explanation:
      "So ein Programm heißt Algorithmus. Es zeigt dir mehr von dem, was dich lange am Bildschirm hält.",
    difficulty: "BEGINNER",
    category: "Algorithmen und KI",
  },
  {
    id: "barrierefreiheit-001",
    questionText: "Wofür sind Bildbeschreibungen (Alternativtexte) da?",
    optionA: "Damit das Bild schneller lädt.",
    optionB: "Damit das Bild schöner aussieht.",
    optionC:
      "Damit Menschen, die das Bild nicht sehen können, erfahren, was darauf ist.",
    correctOption: "C",
    explanation:
      "Ein Vorleseprogramm liest blinden Menschen die Beschreibung vor. So können alle mitmachen.",
    difficulty: "BEGINNER",
    category: "Barrierefreiheit und Inklusion",
  },
];
