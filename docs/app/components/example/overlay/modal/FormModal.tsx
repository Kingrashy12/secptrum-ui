"use client";

import { Typography } from "@/components";
import React, { useState } from "react";
import CodeBlock from "@/components/custom/code/CodeBlock";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  Tabs,
  TabHandle,
  TabPanel,
  toast,
  Modal,
  ModalPanel,
  ModalTitle,
  ModalContent,
  Button,
  Card,
  TextInput,
  Stack,
} from "secptrum-ui";
import { modalCodes } from "@/data/codes/modal";

const FormModal = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  function login() {
    if (!email) {
      toast.warning("Tho you didn't enter your email, But it just a test 🤗");
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setEmail("");
        toast.success(`Welcome back ${email}`);
        setOpen(false);
      }, 3000);
    }
  }

  return (
    <>
      {open ? (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          preventClose={isLoading}
        >
          <ModalPanel size="lg" transition="dropIn">
            <ModalTitle
              title="Login"
              showClose
              preventClose={isLoading}
              onClose={() => setOpen(false)}
            />
            <ModalContent>
              <Typography style={{ color: "black" }} className="modal-text">
                Welcome back, login to your account to continue
              </Typography>
              <TextInput
                Type="email"
                name="email"
                type="email"
                value={email}
                placeholder="your@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                icon={MdOutlineAlternateEmail}
              />
              <TextInput
                Type="password"
                placeholder="Enter your password"
                icon={RiLockPasswordLine}
              />
              <Button size="lg" onClick={login} fullWidth isLoading={isLoading}>
                Login
              </Button>
            </ModalContent>
          </ModalPanel>
        </Modal>
      ) : (
        <Card fullWidth>
          <Tabs variant="solid">
            <TabHandle value="preview">Preview</TabHandle>
            <TabHandle value="code">Code</TabHandle>

            <TabPanel>
              <Stack>
                <Button onClick={() => setOpen(true)} variant="outline">
                  Login
                </Button>
              </Stack>
            </TabPanel>

            <TabPanel>
              <CodeBlock code={modalCodes.form} />
            </TabPanel>
          </Tabs>
        </Card>
      )}
    </>
  );
};

export default FormModal;
