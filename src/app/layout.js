// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "EMU University Tashkent",
//   description: "EURASIAN MULTIDISCIPLINARY UNIVERSITY",
// };

// // Получаем Facebook Pixel ID из переменной окружения
// const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// export default function RootLayout({ children }) {
//   return (
//     <html lang="uz">
//       <head>
//         {FACEBOOK_PIXEL_ID && (
//           <>
//             <Script
//               id="facebook-pixel"
//               strategy="afterInteractive"
//               dangerouslySetInnerHTML={{
//                 __html: `
//                   !function(f,b,e,v,n,t,s)
//                   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//                   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//                   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//                   n.queue=[];t=b.createElement(e);t.async=!0;
//                   t.src=v;s=b.getElementsByTagName(e)[0];
//                   s.parentNode.insertBefore(t,s)}(window, document,'script',
//                   'https://connect.facebook.net/en_US/fbevents.js');
//                   fbq('init', '${FACEBOOK_PIXEL_ID}');
//                   fbq('track', 'PageView');
//                 `,
//               }}
//             />
//             <noscript>
//               <img
//                 height="1"
//                 width="1"
//                 style={{ display: "none" }}
//                 src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
//               />
//             </noscript>
//           </>
//         )}
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }







// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EMU Pre-Foundation",
  description: "EURASIAN MULTIDISCIPLINARY UNIVERSITY",
};

// Получаем Facebook Pixel ID из переменной окружения
const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        {/* Preconnect для API - ОПТИМИЗАЦИЯ */}
        <link rel="preconnect" href="https://admission.emuni.uz" />
        <link rel="dns-prefetch" href="https://admission.emuni.uz" />

        {/* Preload критических изображений - ОПТИМИЗАЦИЯ */}
        <link rel="preload" as="image" href="/emu-logo.jpg" />

        {FACEBOOK_PIXEL_ID && (
          <>
            <Script
              id="facebook-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${FACEBOOK_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}