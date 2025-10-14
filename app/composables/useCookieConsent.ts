export const useCookieConsent = () => {
    const cookieConsent = useCookie("cookie-consent", {
      default: () => null as string | null,
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  
    const hasConsented = computed(() => cookieConsent.value === "accepted");
    const hasDeclined = computed(() => cookieConsent.value === "declined");
    const showBanner = computed(() => cookieConsent.value === null);
  
    const acceptCookies = () => {
      cookieConsent.value = "accepted";
      // Enable Google Analytics
      const { gtag } = useGtag();
      if (gtag) {
        gtag("consent", "update", {
          analytics_storage: "granted",
          ad_storage: "granted",
        });
        // Track consent event
        gtag("event", "cookie_consent", {
          consent_status: "accepted",
          consent_source: "banner",
          event_category: "consent",
        });
      }
    };
  
    const declineCookies = () => {
      cookieConsent.value = "declined";
      // Disable Google Analytics
      const { gtag } = useGtag();
      if (gtag) {
        gtag("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
        });
        // Track consent event
        gtag("event", "cookie_consent", {
          consent_status: "declined",
          consent_source: "banner",
          event_category: "consent",
        });
      }
    };
  
    const resetConsent = () => {
      cookieConsent.value = null;
    };
  
    return {
      hasConsented,
      hasDeclined,
      showBanner,
      acceptCookies,
      declineCookies,
      resetConsent,
    };
  };
  