interface BotpressWebchat {
  init: (config: { configUrl: string }) => void;
}

declare global {
  interface Window {
    botpress?: BotpressWebchat;
  }
}

export {};
