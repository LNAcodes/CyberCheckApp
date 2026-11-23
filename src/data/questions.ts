import { Question } from "@/types/quiz";

export const questions: Question[] = [
  // Privatsphäre und Überwachung
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
    setId: "privatsphaere",
  },
  {
    id: "privatsphaere-002",
    questionText:
      "Eine Taschenlampen-App will deine Kontakte lesen. Was kannst du tun?",
    optionA: "Ich muss zustimmen, sonst geht das Handy kaputt.",
    optionB: "Ich muss die App sofort bezahlen.",
    optionC: "Ich kann ablehnen. Eine Taschenlampe braucht keine Kontakte.",
    correctOption: "C",
    explanation:
      "Du entscheidest, was eine App darf. Frag dich immer: Braucht sie das wirklich?",
    difficulty: "BEGINNER",
    setId: "privatsphaere",
  },
  {
    id: "privatsphaere-003",
    questionText:
      "Ab welchem Alter darfst du in Deutschland selbst zustimmen, dass ein Online-Dienst deine Daten nutzt?",
    optionA: "Ab 16 Jahren",
    optionB: "Ab 10 Jahren",
    optionC: "Erst ab 21 Jahren",
    correctOption: "A",
    explanation:
      "Bist du jünger als 16, müssen deine Eltern zustimmen. So steht es in der Datenschutz-Grundverordnung.",
    difficulty: "INTERMEDIATE",
    setId: "privatsphaere",
  },

  // Sicherheit und Online-Belästigung
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
    setId: "sicherheit",
  },
  {
    id: "sicherheit-002",
    questionText:
      'Jemand, den du nur aus dem Internet kennst, will Fotos von dir und sagt: "Erzähl es keinem." Was tust du?',
    optionA:
      "Ich schicke nichts und erzähle es einer Person, der ich vertraue.",
    optionB: "Ich schicke eins, dann hört es auf.",
    optionC: "Ich behalte es für mich, weil ich es versprochen habe.",
    correctOption: "A",
    explanation:
      "Druck und Geheimhaltung sind Warnzeichen. Du bist nicht schuld. Hilfe bekommst du auch bei der Nummer gegen Kummer: 116 111.",
    difficulty: "BEGINNER",
    setId: "sicherheit",
  },
  {
    id: "sicherheit-003",
    questionText: "Welches Passwort ist am sichersten?",
    optionA: "Dein Name und dein Geburtsjahr",
    optionB: "Ein langer Satz, den nur du kennst, für jedes Konto ein anderer",
    optionC: "123456, weil man es sich gut merken kann",
    correctOption: "B",
    explanation:
      "Lange Passwörter sind schwer zu erraten. Verschiedene Passwörter schützen deine anderen Konten, wenn eins geknackt wird.",
    difficulty: "BEGINNER",
    setId: "sicherheit",
  },

  // Algorithmen und KI
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
    setId: "algorithmen",
  },
  {
    id: "algorithmen-002",
    questionText: "Kann eine KI unfair sein?",
    optionA: "Nein, Computer sind immer neutral.",
    optionB: "Ja, wenn sie mit einseitigen Daten gelernt hat.",
    optionC: "Nur, wenn sie kaputt ist.",
    correctOption: "B",
    explanation:
      "Eine KI lernt aus Beispielen. Fehlen darin bestimmte Menschen, behandelt sie diese oft schlechter.",
    difficulty: "INTERMEDIATE",
    setId: "algorithmen",
  },
  {
    id: "algorithmen-003",
    questionText:
      "Ein KI-Chatbot gibt dir eine Antwort für die Hausaufgabe. Stimmt sie sicher?",
    optionA: "Ja, eine KI weiß alles.",
    optionB: "Ja, wenn die Antwort lang ist.",
    optionC: "Nein. Eine KI kann Fehler machen und Dinge erfinden.",
    correctOption: "C",
    explanation: "Prüfe wichtige Angaben immer mit einer zweiten Quelle.",
    difficulty: "BEGINNER",
    setId: "algorithmen",
  },

  // Barrierefreiheit und Inklusion
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
    setId: "barrierefreiheit",
  },
  {
    id: "barrierefreiheit-002",
    questionText: "Wem helfen Untertitel in Videos?",
    optionA:
      "Gehörlosen Menschen und allen, die gerade keinen Ton hören können.",
    optionB: "Nur Menschen, die eine andere Sprache sprechen.",
    optionC: "Niemandem, sie stören nur.",
    correctOption: "A",
    explanation:
      "Barrierefreiheit hilft oft viel mehr Menschen, als man denkt, zum Beispiel auch im leisen Bus.",
    difficulty: "BEGINNER",
    setId: "barrierefreiheit",
  },
  {
    id: "barrierefreiheit-003",
    questionText:
      "Eine Webseite schreibt hellgrau auf weiß. Was ist das Problem?",
    optionA: "Es gibt kein Problem.",
    optionB: "Viele Menschen können den Text kaum lesen.",
    optionC: "Die Seite wird dadurch langsamer.",
    correctOption: "B",
    explanation:
      "Guter Kontrast hilft Menschen mit Sehbehinderung und allen, die in der Sonne aufs Handy schauen.",
    difficulty: "BEGINNER",
    setId: "barrierefreiheit",
  },

  // Teilhabe und Datenrechte
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
    setId: "datenrechte",
  },
  {
    id: "datenrechte-002",
    questionText: "Du willst, dass ein Dienst deine Daten löscht. Geht das?",
    optionA: "Nein, einmal gespeichert bleibt für immer.",
    optionB: "Nur, wenn du 18 bist.",
    optionC: "Ja, in vielen Fällen darfst du das verlangen.",
    correctOption: "C",
    explanation:
      "Das heißt Recht auf Löschung. Es gilt auch für Kinder und Jugendliche.",
    difficulty: "INTERMEDIATE",
    setId: "datenrechte",
  },
  {
    id: "datenrechte-003",
    questionText: "Gelten Kinderrechte auch im Internet?",
    optionA: "Ja. Kinderrechte gelten überall, auch online.",
    optionB: "Nein, im Internet gelten keine Rechte.",
    optionC: "Nur in der Schule.",
    correctOption: "A",
    explanation:
      "Du hast auch online ein Recht auf Schutz, auf Information und darauf, mitzureden.",
    difficulty: "BEGINNER",
    setId: "datenrechte",
  },
];
