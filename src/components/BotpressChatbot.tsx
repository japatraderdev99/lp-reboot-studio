import { useEffect } from "react";

const BotpressChatbot = () => {
  useEffect(() => {
    // Delay chatbot load to prioritize FCP - load after 5 seconds or on idle
    const loadChatbot = () => {
      if (document.getElementById('botpress-webchat-inject')) return;

      // Inject main script
      const injectScript = document.createElement('script');
      injectScript.id = 'botpress-webchat-inject';
      injectScript.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
      injectScript.defer = true;
      document.head.appendChild(injectScript);

      // Inject config script after main script loads
      injectScript.onload = () => {
        const configScript = document.createElement('script');
        configScript.id = 'botpress-webchat-config';
        configScript.src = 'https://files.bpcontent.cloud/2025/11/02/08/20251102080919-OZ6VRDMJ.js';
        configScript.defer = true;
        document.head.appendChild(configScript);
      };
    };

    // Use requestIdleCallback for better performance, fallback to setTimeout
    let timeoutId: ReturnType<typeof setTimeout>;
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(loadChatbot, { timeout: 5000 });
    } else {
      timeoutId = setTimeout(loadChatbot, 4000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      const inject = document.getElementById('botpress-webchat-inject');
      const config = document.getElementById('botpress-webchat-config');
      if (inject) inject.remove();
      if (config) config.remove();
    };
  }, []);

  return null;
};

export default BotpressChatbot;
