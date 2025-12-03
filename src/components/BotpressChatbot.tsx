import { useEffect } from "react";

const BotpressChatbot = () => {
  useEffect(() => {
    if (document.getElementById('botpress-webchat-inject')) return;

    // Inject main script
    const injectScript = document.createElement('script');
    injectScript.id = 'botpress-webchat-inject';
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    injectScript.defer = true;
    document.head.appendChild(injectScript);

    // Inject config script
    const configScript = document.createElement('script');
    configScript.id = 'botpress-webchat-config';
    configScript.src = 'https://files.bpcontent.cloud/2025/11/02/08/20251102080919-OZ6VRDMJ.js';
    configScript.defer = true;
    document.head.appendChild(configScript);

    return () => {
      const inject = document.getElementById('botpress-webchat-inject');
      const config = document.getElementById('botpress-webchat-config');
      if (inject) inject.remove();
      if (config) config.remove();
    };
  }, []);

  return null;
};

export default BotpressChatbot;
