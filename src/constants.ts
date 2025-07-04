export const LOADING_STATES = {
  INITIAL: "INITIAL",
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
} as const;

export type LoadingStates = keyof typeof LOADING_STATES;

export const CUSTOM_EVENTS = {
  UPDATE_SELECTED_BIBLE_TRANSLATION: "UPDATE_SELECTED_BIBLE_TRANSLATION",
  UPDATE_SELECTED_BIBLE_VERSE: "UPDATE_SELECTED_BIBLE_VERSE",
  UPDATE_RECITED_BIBLE_VERSE: "UPDATE_RECITED_BIBLE_VERSE",
  NAVIGATE_TO_STEP: "NAVIGATE_TO_STEP",
  SEARCH_FOR_BIBLE_VERSE: "SEARCH_FOR_BIBLE_VERSE",
} as const;

export type CustomEvents = keyof typeof CUSTOM_EVENTS;

export const SPEECH_RECOGNITION_STATES = {
  INITIAL: "INITIAL",
  WAITING_FOR_MICROPHONE_ACCESS: "WAITING_FOR_MICROPHONE_ACCESS",
  LISTENING: "LISTENING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
} as const;

export type SpeechRecognitionStates = keyof typeof SPEECH_RECOGNITION_STATES;

export const MEMORIZE_SCRIPTURE_API_BASE_URL =
  import.meta.env.VITE_MEMORIZE_SCRIPTURE_API_BASE_URL ??
  "https://memorize-scripture-api-server.fly.dev";
