import { useEffect, useState, useCallback } from "react";
import { MessageCircle, X } from "lucide-react";

const BotpressChatbot = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const loadChatbot = useCallback(() => {
    if (isLoaded || document.getElementById('botpress-webchat-inject')) {
      setIsLoaded(true);
      return;
    }

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
      
      configScript.onload = () => {
        setIsLoaded(true);
        setIsOpen(true);
      };
    };
  }, [isLoaded]);

  const handleTriggerClick = () => {
    if (!isLoaded) {
      loadChatbot();
    } else {
      // Toggle chatbot visibility using Botpress API
      if (window.botpress) {
        window.botpress.open();
      }
      setIsOpen(true);
    }
  };

  useEffect(() => {
    // Show trigger after 7 seconds
    const timer = setTimeout(() => {
      setShowTrigger(true);
    }, 7000);

    // Or show when reaching last section (FAQ/Footer)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowTrigger(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe FAQ section or Footer
    const checkForSection = () => {
      const faqSection = document.querySelector('[data-section="faq"]');
      const footer = document.querySelector('footer');
      if (faqSection) observer.observe(faqSection);
      if (footer) observer.observe(footer);
    };

    // Check after a delay to ensure sections are rendered
    const sectionTimer = setTimeout(checkForSection, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(sectionTimer);
      observer.disconnect();
      const inject = document.getElementById('botpress-webchat-inject');
      const config = document.getElementById('botpress-webchat-config');
      if (inject) inject.remove();
      if (config) config.remove();
    };
  }, []);

  // Hide custom trigger when Botpress is loaded and open
  if (isLoaded && isOpen) {
    return null;
  }

  if (!showTrigger) {
    return null;
  }

  return (
    <button
      onClick={handleTriggerClick}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in group"
      aria-label="Abrir chat com consultor"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
      </div>
      <span className="text-sm font-medium hidden sm:inline">
        Consultor ao vivo
      </span>
      <span className="text-sm font-medium sm:hidden">
        Dúvidas?
      </span>
    </button>
  );
};

// Extend Window interface for Botpress
declare global {
  interface Window {
    botpress?: {
      open: () => void;
      close: () => void;
      toggle: () => void;
    };
  }
}

export default BotpressChatbot;
