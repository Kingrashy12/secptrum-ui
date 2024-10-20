export const modeConfigCode = {
  react: `
// App.js
import React from "react";
import { ModeProvider } from "secptrum-ui";

export default function App(){
  return (
    <ModeProvider mode="dark">
    // Your app
    </ModeProvider>
  )
};
    `,
  next: `
// pages/_app.js
import React from "react";
import { ModeProvider } from "secptrum-ui";

export default function App({ Component, pageProps }){
  return (
    <ModeProvider mode="dark">
    <Component {...pageProps} />
    </ModeProvider>
  )
};
    `,
  next_app: `
// app/layout.js
import React from "react";
import { ModeProvider } from "secptrum-ui";

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ModeProvider mode="dark">
          {children}
        </ModeProvider>
      </body>
    </html>
  )
};
    `,
};
