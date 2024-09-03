import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import styled from "styled-components";
import ModalPanel from "../../components/Modal/ModalPanel";
import { useModal } from "../../context/useModal";
import Button from "../../components/Button/Button";
import Stack from "../../components/Stack/Stack";
import Box from "../../components/Box/Box";
import { colors } from "../../styles/colors";
import Icon from "../../components/Icon/Icon";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";

const Trash = styled(Box)<{ animate?: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  background: ${colors.red100};
  justify-content: center;
  align-items: center;
  animation: ${(props) => props.animate && "bounce 1s infinite linear"};
  transition: all;
  transition-duration: 500ms;
  transition-delay: 500ms;

  @keyframes bounce {
    from {
      transition: all;
      transition-duration: 500ms;
      transition-delay: 500ms;
      transform: translateY(-5px) rotate(-5deg);
      scale: 1.01;
    }
    to {
      transition: all;
      transition-duration: 500ms;
      transition-delay: 500ms;
      transform: translateY(5px) rotate(5deg);
      scale: 1;
    }
  }
`;

const Trashed = styled(Box)`
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  background: ${colors.green100};
  justify-content: center;
  align-items: center;
  animation: pop 1s linear;

  @keyframes pop {
    from {
      scale: 0.1;
    }
    to {
      scale: 1;
    }
  }
`;

const ModalDocs = () => {
  const { isOpen, onClose, onOpen } = useModal();
  const [deleting, setDeleting] = useState(false);
  const [delected, setDelected] = useState(false);

  useEffect(() => {
    if (deleting) {
      setTimeout(() => {
        setDeleting(false);
        setDelected(true);
      }, 3000);
    }
  }, [deleting]);

  useEffect(() => {
    if (delected) {
      setTimeout(() => {
        setDelected(false);
      }, 2000);
    }
  }, [delected]);

  return (
    <>
      {isOpen ? (
        <Modal open={isOpen} onClose={onClose}>
          <ModalPanel align="vertical">
            {deleting ? (
              <Box
                centered
                direction="column"
                style={{ height: 200, width: 400 }}
              >
                <Trash animate>
                  <Icon icon={FaRegTrashCan} color="red" size={30} />
                </Trash>
              </Box>
            ) : delected ? (
              <Box style={{ height: 200, width: 400 }} centered>
                <Trashed>
                  <Icon icon={IoCheckmarkSharp} color="green" size={30} />
                </Trashed>
              </Box>
            ) : (
              <>
                <Box
                  direction="column"
                  padding="0"
                  centered
                  style={{ width: `100%` }}
                >
                  <Trash>
                    <Icon icon={FaRegTrashCan} color="red" size={30} />
                  </Trash>
                  <h1 style={{ fontSize: 25 }}>Are you sure?</h1>
                  <p style={{ color: colors.neutral400 }}>
                    Do you really want to delete this item? This action cannot
                    be undone.
                  </p>
                </Box>
                <Stack style={{ width: "auto" }} align="horizontal">
                  <Button radius="lg" onClick={() => setDeleting(true)}>
                    Yes, Delete
                  </Button>
                  <Button variant="ghost" radius="lg" onClick={onClose}>
                    Cancel
                  </Button>
                </Stack>
              </>
            )}
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
