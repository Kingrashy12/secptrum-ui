export const toastCodes = {
  cra: `
// Root file (e.g., App.js)
import React from 'react';
import { Toaster } from 'secptrum-ui';
import YourApp from './YourApp';

const App = () => {
  return (
    <div>
      <Toaster />
      <YourApp />
    </div>
  );
};

export default App;
    `,
  next: `
// pages/_app.js
import { Toaster } from 'secptrum-ui';

function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default App;
    `,
  basic: `
import { toast, Button, Stack } from 'secptrum-ui';

 function makeToast() {
  toast.info("Hello world");
 }

function App() {
  return (
    <Stack>
      <Button size="lg" onClick={makeToast}>
        Make a toast
      </Button>
    </Stack>
  );
}

export default App;
  `,
  position: `
import { toast, Button, Stack } from 'secptrum-ui';

 function makeToast() {
   toast.success("You changed the position", {
      position: "top-left",
      transition: "dropIn",
    });
 }

function App() {
  return (
    <Stack>
      <Button size="lg" variant="outline" onClick={makeToast}>
        Change position
      </Button>
    </Stack>
  );
}

export default App;
  `,
  transition: `
import { toast, Button, Stack } from 'secptrum-ui';

function App() {
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
      <Button size="lg" onClick={walkin}>
        Walk in
      </Button>
        <Button size="lg" variant="outline" onClick={slidein}>
          Slide in
        </Button>
        <Button size="lg" variant="light" onClick={dropin}>
          Drop in
        </Button>
        <Button size="lg" variant="ghost" onClick={popIn}>
          Pop in
        </Button>
    </Stack>
  );
}

export default App;
  `,
};
