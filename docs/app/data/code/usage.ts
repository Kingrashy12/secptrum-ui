export const usageCode = {
  quickStart: `
import { Button, toast } from 'secptrum-ui';

export default function Home() {

  retrun(
    <Button
     size="lg"
     radius="lg"
     onClick={() => toast.success("This is a success message!")}
    >
      Make a toast
    </Button>
  );
};
      
    `,
  theme: `
import { ThemeProvider } from "secptrum-ui";

export default function App(){
    <ThemeProvider>
       ...
    </ThemeProvider>,
  };
);
    `,
  example: `
import styled from 'styled-components';
import { Button } from 'your-ui-library';

// Customizing the Button component
const CustomButton = styled(Button)\`
  && {
    background-color: #007bff; /* Override background color */
    color: white; /* Override text color */
    padding: 12px 24px; /* Add custom padding */
  }
\`;

const App = () => (
  <CustomButton>
    Click Me
  </CustomButton>
);

export default App;
  `,
};
