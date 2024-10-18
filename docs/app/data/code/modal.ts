export const modalCodes = {
  ex: `
import { Typography } from "@/components";
import React, { useState } from "react";
import { useTheme } from "@/context/useTheme";
import { toast, ModalContent, ModalFooter, ModalTitle, Button, ModalPanel, Modal, Card } from "secptrum-ui";

const ModalExample = ({ code }: { code: string }) => {
  const [open, setOpen] = useState(false);
  const { mode } = useTheme();

  function del() {
    toast.success("Your account has been deleted");
    setOpen(false);
  }

  return (
    <>
      {open ? (
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalPanel size="lg">
            <ModalTitle>Confirm Deletion</ModalTitle>
            <ModalContent>
              <Typography>
                Are you sure you want to delete your account? This action cannot
                be undone.
              </Typography>
            </ModalContent>
            <ModalFooter space={6}>
              <Button
                color={mode === "dark" ? "black" : ""}
                onClick={() => setOpen(false)}
                variant="outline"
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={del}>
                Continue
              </Button>
            </ModalFooter>
          </ModalPanel>
        </Modal>
      ) : (
        <Card>
            <Button onClick={() => setOpen(true)} variant="outline">
                Delete
            </Button>
        </Card>
      )}
    </>
  );
};

export default ModalExample;

    `,
  form: `
import { Typography } from "@/components";
import React, { useState } from "react";
import { useTheme } from "@/context/useTheme";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { toast, ModalContent, ModalTitle, Button, ModalPanel, Modal, Input, Card } from "secptrum-ui";

const FormModal = ({ code }: { code: string }) => {
  const [open, setOpen] = useState(false);
  const { mode } = useTheme();

   function login() {
    if (!email) {
      toast.success("Tho you didn't enter your email, But it just a test 🤗");
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setEmail("");
        toast.success('Welcome back ${'email'}');
        setOpen(false);
      }, 3000);
    }
  }


  return (
    <>
      {open ? (
         <Modal open={open} onClose={() => setOpen(false)}>
          <ModalPanel size="lg" transition="dropIn">
            <ModalTitle>Login</ModalTitle>
            <ModalContent>
              <Typography>
                Welcome back, login to your account to continue
              </Typography>
              <Input
                Type="email"
                name="email"
                type="email"
                value={email}
                placeholder="your@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                icon={MdOutlineAlternateEmail}
              />
              <Input
                Type="password"
                type="password"
                placeholder="Enter your password"
                icon={RiLockPasswordLine}
              />
              <Button size="lg" onClick={login} isLoading={isLoading}>
                Login
              </Button>
            </ModalContent>
          </ModalPanel>
        </Modal>
      ) : (
        <Card>
            <Button onClick={() => setOpen(true)} variant="outline">
                Login
            </Button>
        </Card>
      )}
    </>
  );
};

export default FormModal;

    `,
};
