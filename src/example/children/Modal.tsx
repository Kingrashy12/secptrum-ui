import React from "react";
import Modal from "../../components/Modal/Modal";
import styled from "styled-components";
import ModalPanel from "../../components/Modal/ModalPanel";
import { useModal } from "../../context/useModal";
import Button from "../../components/Button/Button";
import Stack from "../../components/Stack/Stack";
import Box from "../../components/Box/Box";

const StyledExample = styled.div``;

const ModalDocs = () => {
  const { isOpen, onClose, onOpen } = useModal();
  return (
    <>
      {isOpen ? (
        <Modal open={isOpen} onClose={onClose}>
          <ModalPanel>
            <Box>
              <h1>Welcome back</h1>
              <p>Would you like to try out the new features?</p>
            </Box>
          </ModalPanel>
        </Modal>
      ) : (
        <Button onClick={onOpen} radius="lg">
          Open Modal
        </Button>
      )}
    </>
  );
};

export default ModalDocs;
