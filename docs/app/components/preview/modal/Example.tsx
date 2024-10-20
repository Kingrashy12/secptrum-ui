"use client";

import { Typography } from "@/components";
import React, { useState } from "react";
import { PrevContainer } from "../CircleLoader";
import CodeBlock from "@/components/custom/code/CodeBlock";
import {
  Tabs,
  TabsHandle,
  TabPanel,
  toast,
  Modal,
  ModalPanel,
  ModalTitle,
  ModalContent,
  Button,
  Card,
  ModalFooter,
} from "secptrum-ui";

const ModalExample = ({ code }: { code: string }) => {
  const [open, setOpen] = useState(false);

  function deleteAccount() {
    toast.success("Your account has been deleted");
    setOpen(false);
  }

  return (
    <>
      {open ? (
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalPanel size="lg">
            <ModalTitle title="Confirm Deletion" />
            <ModalContent>
              <Typography style={{ color: "black" }}>
                Are you sure you want to delete your account? This action cannot
                be undone.
              </Typography>
            </ModalContent>
            <ModalFooter space={6} position="left">
              <Button onClick={() => setOpen(false)} variant="outline">
                Cancel
              </Button>
              <Button variant="danger" onClick={deleteAccount}>
                Continue
              </Button>
            </ModalFooter>
          </ModalPanel>
        </Modal>
      ) : (
        <Card>
          <Tabs variant="solid">
            <TabsHandle value="preview">Preview</TabsHandle>
            <TabsHandle value="code">Code</TabsHandle>

            <TabPanel>
              <PrevContainer>
                <Button onClick={() => setOpen(true)} variant="outline">
                  Delete
                </Button>
              </PrevContainer>
            </TabPanel>

            <TabPanel>
              <CodeBlock code={code} />
            </TabPanel>
          </Tabs>
        </Card>
      )}
    </>
  );
};

export default ModalExample;
