import { useEffect } from "react";

const BotpressChatbot = () => {
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById('botpress-webchat-script')) return;

    const script = document.createElement('script');
    script.id = 'botpress-webchat-script';
    script.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize webchat after script loads
      if (window.botpress) {
        window.botpress.init({
          configUrl: 'https://files.bpcontent.cloud/2025/11/02/08/20251102080919-FP37SPLO.json'
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('botpress-webchat-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default BotpressChatbot;
