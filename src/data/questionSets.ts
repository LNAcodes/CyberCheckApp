import type { QuestionSet } from "@/types/quiz";

export const questionSets: QuestionSet[] = [
  {
    id: "privatsphaere",
    title: "Privatsphäre und Überwachung",
    description: "Wer darf was über mich wissen?",
  },
  {
    id: "sicherheit",
    title: "Sicherheit und Online-Belästigung",
    description: "Was ich tun kann und wo ich Hilfe bekomme",
  },
  {
    id: "algorithmen",
    title: "Algorithmen und KI",
    description: "Wie Systeme entscheiden und wen sie benachteiligen",
  },
  {
    id: "barrierefreiheit",
    title: "Barrierefreiheit und Inklusion",
    description: "Wer im Netz ausgeschlossen wird und warum",
  },
  {
    id: "datenrechte",
    title: "Teilhabe und Datenrechte",
    description: "Mitbestimmen, Auskunft verlangen, widersprechen",
  },
];

export function getSetTitle(setId: string): string {
  const matchingSet = questionSets.find(
    (questionSet) => questionSet.id === setId,
  );

  if (matchingSet === undefined) {
    return "";
  }

  return matchingSet.title;
}
