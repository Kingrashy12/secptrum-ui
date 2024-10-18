export const inputCodes = {
  variant: `
import { Stack, TextInput } from "secptrum-ui";

const InputVariants = () => {
    return (
       <Stack align="horizontal" spacing="lg" wrap>
          <TextInput
            Type="text"
            name="email"
            placeholder="Solid TextInput"
            variant="solid"
          />
          <TextInput
            Type="text"
            name="email"
            placeholder="Outline TextInput"
            variant="outline"
          />
          <TextInput
            Type="text"
            name="email"
            placeholder="Ghost TextInput"
            variant="ghost"
          />
        </Stack>
    );
};
    `,
  pass: `
import { Stack, TextInput } from "secptrum-ui";

const InputPasswordExample = () => {
    return (
       <Stack>
          <TextInput
           Type="password"
            name="password"
            placeholder="Enter your password"
          />
        </Stack>
    );
};
    `,
  disabled: `
import { Stack, TextInput } from "secptrum-ui";

const DisabledInputExample = () => {
    return (
       <Stack>
         <TextInput
           Type="email"
           name="email"
           placeholder="Enter your email"
           icon={MdOutlineAlternateEmail}
           disabled
          />
        </Stack>
    );
};
    `,
  error: `
import { Stack, TextInput } from "secptrum-ui";
 const [email, setEmail] = useState("");
 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 const isValidEmail = emailRegex.test(email);
 

const InputErrorExample = () => {
    return (
       <TextInput
        Type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        icon={MdOutlineAlternateEmail}
        errorMessage="Please enter a valid email address."
        error={email && !isValidEmail}
        />
    );
};
    `,
  radius: `
import { Stack, TextInput } from "secptrum-ui";
 
 const InputRadiusExample = () => {
    return (
      <Stack align='horizontal' wrap>
       <TextInput
         Type="text"
         name="email"
         placeholder="Small Radius TextInput"
         variant="solid"
         radius="sm"
          />
        <TextInput
          Type="text"
          name="email"
          placeholder="Medium Radius TextInput"
          variant="solid"
          radius="md"
          />
          <TextInput
            Type="text"
            name="email"
            placeholder="Large Radius TextInput"
            variant="outline"
            radius="lg"
          />
          <TextInput
            Type="text"
            name="email"
            placeholder="Extra Large Radius TextInput"
            variant="outline"
            radius="xl"
          />
          <TextInput
            Type="text"
            name="email"
            placeholder="Full Radius TextInput"
            variant="solid"
            radius="full"
          />
      </Stack>
    );
};
    `,
};
