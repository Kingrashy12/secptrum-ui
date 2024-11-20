import { Typography } from "../../..";
import React, { useState } from "react";
import CodeBlock from "../../../custom/code/CodeBlock";
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
  ModalFooter,
  Stack,
} from "secptrum-ui";
import { modalCodes } from "../../../../data/codes/modal";

const ModalExample = () => {
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
              <Typography style={{ color: "black" }} className="modal-text">
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
        <Card fullWidth>
          <Tabs variant="solid">
            <TabHandle value="preview">Preview</TabHandle>
            <TabHandle value="code">Code</TabHandle>

            <TabPanel>
              <Stack>
                <Button onClick={() => setOpen(true)} variant="outline">
                  Delete
                </Button>
              </Stack>
            </TabPanel>

            <TabPanel>
              <CodeBlock code={modalCodes.ex} />
            </TabPanel>
          </Tabs>
        </Card>
      )}
    </>
  );
};

export default ModalExample;
