/**
 * Google Tag Manager and Google Analytics 4 Integration
 * Add your GTM_ID and GA_ID to environment variables
 */

export function GoogleAnalytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Return null if no IDs are configured
  if (!gtmId && !gaId) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <>
          {/* GTM noscript */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {/* GTM script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        </>
      )}

      {/* Google Analytics 4 (if not using GTM) */}
      {gaId && !gtmId && (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
      )}

      {/* GA4 config */}
      {gaId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />
      )}

      {/* Google Search Console verification */}
      {process.env.NEXT_PUBLIC_GSC_VERIFICATION && (
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GSC_VERIFICATION}
        />
      )}
    </>
  );
}
