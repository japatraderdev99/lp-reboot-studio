import { useEffect } from "react";

const BOT_ID = "4371a7d8-459d-497e-a763-550ec30985f1";

const BotpressChatbot = () => {
  useEffect(() => {
    if (document.getElementById('botpress-webchat-inject')) return;

    // Inject script
    const injectScript = document.createElement('script');
    injectScript.id = 'botpress-webchat-inject';
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    document.head.appendChild(injectScript);

    injectScript.onload = () => {
      // Initialize with bot ID
      if ((window as any).botpressWebChat) {
        (window as any).botpressWebChat.init({
          botId: BOT_ID,
          hostUrl: 'https://cdn.botpress.cloud/webchat/v2.2',
          messagingUrl: 'https://messaging.botpress.cloud',
        });
      }
    };

    return () => {
      const inject = document.getElementById('botpress-webchat-inject');
      if (inject) inject.remove();
    };
  }, []);

  return null;
};

export default BotpressChatbot;
