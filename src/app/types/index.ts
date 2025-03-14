export interface Message {
  role: 'User' | 'Mark' | 'Max';
  content: string;
}

export interface ChatResponse {
  conversation: Message[];
}

export interface InputFormProps {
  onStart: (prompt: string) => void;
  isLoading: boolean;
}

export interface ChatProps {
  conversation: Message[];
}