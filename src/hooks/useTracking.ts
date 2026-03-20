"use client";

/**
 * Custom hooks for analytics tracking
 * Use these in components to track user interactions
 */

import { useCallback } from "react";

/**
 * Hook for tracking events with Google Analytics/GTM
 */
export function useTracking() {
  const trackEvent = useCallback(
    (
      eventName: string,
      eventData?: Record<string, string | number | boolean>,
    ) => {
      // Google Tag Manager / Google Analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, eventData);
      }

      // Console log in development
      if (process.env.NODE_ENV === "development") {
        console.log(`📊 Event: ${eventName}`, eventData);
      }
    },
    [],
  );

  const trackPageView = useCallback((pageName: string, pagePath: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
        page_title: pageName,
        page_path: pagePath,
      });
    }
  }, []);

  return { trackEvent, trackPageView };
}

/**
 * Hook for tracking form submissions
 */
export function useFormTracking(formName: string) {
  const { trackEvent } = useTracking();

  const trackFormStart = useCallback(() => {
    trackEvent("form_start", { form_name: formName });
  }, [trackEvent, formName]);

  const trackFormSubmit = useCallback(
    (success: boolean) => {
      trackEvent(success ? "form_submit" : "form_error", {
        form_name: formName,
        status: success ? "success" : "error",
      });
    },
    [trackEvent, formName],
  );

  return { trackFormStart, trackFormSubmit };
}

/**
 * Hook for tracking scroll depth
 */
export function useScrollTracking() {
  const { trackEvent } = useTracking();

  const trackScroll = useCallback(
    (depth: number) => {
      trackEvent("scroll_depth", { scroll_percentage: Math.round(depth) });
    },
    [trackEvent],
  );

  return { trackScroll };
}

/**
 * Hook for tracking link clicks
 */
export function useLinkTracking(linkName: string) {
  const { trackEvent } = useTracking();

  const trackLinkClick = useCallback(
    (url?: string) => {
      trackEvent("link_click", {
        link_name: linkName,
        link_url: url || "",
      });
    },
    [trackEvent, linkName],
  );

  return { trackLinkClick };
}

/**
 * Global type augmentation for gtag
 */
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
