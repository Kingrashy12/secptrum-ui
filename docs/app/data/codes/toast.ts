export const toastCodes = {
  cra: `
// Root file (e.g., App.js or App.tsx)
import React from 'react';
import { Toaster } from 'secptrum-ui';
import YourApp from './YourApp';

const App = () => {
  return (
    <>
      <Toaster />
      <YourApp />
    </>
  );
};

export default App;
    `,
  next: `
// pages/_app.js
import { Toaster } from 'secptrum-ui';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
    `,
  next_ts: `
// pages/_app.tsx
import { Toaster } from 'secptrum-ui';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
    `,
  next_app: `
// app/layout.jsx
import { Toaster } from 'secptrum-ui';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
       <Toaster />
       <>{children}</>
      </body>
    </html>
  );
}
    `,
  next_app_ts: `
// app/layout.tsx
import { Toaster } from 'secptrum-ui';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
       <Toaster />
       <>{children}</>
      </body>
    </html>
  );
}
    `,
  basic: `
import { toast, Button, Stack } from 'secptrum-ui';


const ToastDemo = () => {
  return (
    <Stack>
      <Button
        onClick={()=> toast.info("Hello world")}
        >
        Make a toast
      </Button>
    </Stack>
  );
}
  `,
  types: `
import { toast, Button, Stack, colors } from 'secptrum-ui';


const ToastTypes = () => {
  return (
    <Stack>
     <Button
       backgroundColor={colors.green[500]}
       onClick={() =>
       toast.success('Purchase successful! Your order is being processed.')}
     >
       Success
     </Button>
     <Button
       backgroundColor={colors.red[500]}
       onClick={() => toast.error('An error occurred. Please try again.')}
     >
       Error
     </Button>
     <Button
       onClick={() => toast.info('Your request is being processed.')}
     >
       Info
     </Button>
     <Button
       backgroundColor={colors.yellow[500]}
       onClick={() =>
         toast.warning(
            'Please review all details before proceeding to avoid any issues or errors.'
          )
        }
     >
       Warning
     </Button>
    </Stack>
  );
}
  `,
  position: `
import { toast, Button, Stack } from 'secptrum-ui';

const PositionDemo = () => {
  return (
    <Stack>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('A Toast from Top Left', {
            position: 'top-left',
            transition: 'dropIn',
          })
        }
      >
        Top Left
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('A Toast from Top Right', {
            position: 'top-right',
            transition: 'dropIn',
          })
        }
      >
        Top Right
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('A Toast from Bottom Left', {
            position: 'bottom-left',
            transition: 'popIn',
          })
        }
      >
        Bottom Left
      </Button>
      <Button
      
        variant="outline"
        onClick={() =>
          toast.success('A Toast from Bottom Right', {
            position: 'bottom-right',
            transition: 'popIn',
          })
        }
      >
        Bottom Right
      </Button>
    </Stack>
  );
}
  `,
  transition: `
import { toast, Button, Stack } from 'secptrum-ui';

const TransitionDemo = () => {
  function walkin() {
    toast.success("Profile saved successfully!", {
      position: "bottom-left",
      transition: "walkIn",
    });
  }
  function slidein() {
    toast.info("New message received!", {
      position: "bottom-right",
      transition: "slideIn",
    });
  }
  function dropin() {
    toast.error("Error processing request!", {
      position: "top-left",
      transition: "dropIn",
    });
  }
  function popIn() {
    toast.success("Action completed!", {
      position: "top-right",
      transition: "popIn",
    });
  }
    
  return (
    <Stack>
      <Button onClick={walkin}>
        Walk in
      </Button>
        <Button variant="outline" onClick={slidein}>
          Slide in
        </Button>
        <Button variant="light" onClick={dropin}>
          Drop in
        </Button>
        <Button variant="ghost" onClick={popIn}>
          Pop in
        </Button>
    </Stack>
  );
}
  `,
};
