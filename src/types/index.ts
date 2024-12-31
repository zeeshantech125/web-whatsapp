export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  image?: string;
  link?: string;
}

export interface Settings {
  links: string[];
  images: string[];
}