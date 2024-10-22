'use client';

import { useShowcaseForm } from '@/context/useShowCase';
import { fonts } from '@/styles/global';
import React, { useEffect, useState } from 'react';
import { HiCloudArrowUp } from 'react-icons/hi2';
import {
  Box,
  BoxType,
  Button,
  ImagePicker,
  Modal,
  ModalContent,
  ModalFooter,
  ModalPanel,
  ModalTitle,
  TextInput,
} from 'secptrum-ui';
import { colors, styled } from 'styled-chroma';
import Media from './Media';
import { addProject } from '@/helper/api';

const ShowCaseProject = () => {
  const { isOpen, onClose } = useShowcaseForm();
  const [openPicker, setOpenPicker] = useState(false);
  const [formErr, setFormErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState({
    name: '',
    description: '',
    liveDemoUrl: '',
    imageUrl: '',
  });

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProject({ ...project, [name]: value });
  }

  function close() {
    setProject({
      ...project,
      name: '',
      imageUrl: '',
      liveDemoUrl: '',
      description: '',
    });
    onClose();
  }

  function handleImage(image: string) {
    setProject({ ...project, imageUrl: image });
  }

  const isvalidUrl = (url: string) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '([a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5})' + // domain name
        '(\\:[0-9]{1,5})?(\\/.*)?$',
      'i'
    ); // port and path
    return !!pattern.test(url);
  };

  async function submit() {
    if (
      !project.description ||
      !isvalidUrl(project.liveDemoUrl) ||
      !project.name ||
      !project.liveDemoUrl
    ) {
      setFormErr(true);
    } else {
      await addProject({ ...project, setIsLoading, close });
    }
  }

  useEffect(() => {
    if (!isOpen) {
      setFormErr(false);
      setProject({
        ...project,
        name: '',
        imageUrl: '',
        liveDemoUrl: '',
        description: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      <Modal
        open={isOpen}
        onClose={close}
        zIndex={400}
        preventClose={isLoading}
      >
        <ModalPanel transition="dropIn">
          <ModalTitle
            title="Showcase Project"
            showClose
            iconSize={22}
            onClose={onClose}
            preventClose={isLoading}
          />
          <ModalContent>
            {project.imageUrl ? (
              <Media
                src={project.imageUrl}
                onClick={() => setOpenPicker(true)}
                style={{ cursor: 'pointer', borderRadius: 9 }}
                width={130}
                height={130}
              />
            ) : (
              <Uploader
                error={formErr && !project.imageUrl}
                onClick={() => setOpenPicker(true)}
              >
                <HiCloudArrowUp color={colors.green[500]} size={25} />
                <p>Upload screenshot of website landing page</p>
              </Uploader>
            )}
            <Box direction="column" spacing="md">
              <FormLabel>Name</FormLabel>
              <TextInput
                Type="text"
                placeholder="Enter Project name"
                name="name"
                value={project.name}
                onChange={handleForm}
                variant="solid"
                hasError={formErr && !project.name}
                errorMessage="Project name is required"
              />
            </Box>
            <Box direction="column" spacing="md">
              <FormLabel>Description</FormLabel>
              <TextInput
                Type="text"
                placeholder="Enter project Description"
                name="description"
                value={project.description}
                onChange={handleForm}
                variant="solid"
                hasError={formErr && !project.description}
                errorMessage="Project description is required"
              />
            </Box>
            <Box direction="column" spacing="md">
              <FormLabel>Live Demo URL</FormLabel>
              <TextInput
                Type="text"
                placeholder="Enter website url"
                name="liveDemoUrl"
                value={project.liveDemoUrl}
                onChange={handleForm}
                variant="solid"
                hasError={
                  (project.liveDemoUrl && !isvalidUrl(project.liveDemoUrl)) ||
                  (formErr && !project.liveDemoUrl)
                }
                errorMessage="Please enter a valid url"
              />
            </Box>
          </ModalContent>
          <ModalFooter position="right">
            <Button variant="outline" disabled={isLoading} onClick={onClose}>
              Cancel
            </Button>
            <Button isLoading={isLoading} onClick={submit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalPanel>
      </Modal>
      <ImagePicker
        isPickerOpen={openPicker}
        closePicker={() => setOpenPicker(false)}
        onImageSelect={handleImage}
      />
    </>
  );
};

export default ShowCaseProject;

const FormLabel = styled('label')`
  font-family: ${fonts.poppins};
  font-weight: 500;
  color: ${(props) => props.theme.colors?.text};
`;

const Uploader = styled<BoxType & { error: boolean }>(Box)`
  border: 2px dashed
    ${(props) => (props.error ? colors.red[500] : props.theme.colors?.divider)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 8px;
  cursor: pointer;

  p {
    color: ${(props) => props.theme.colors?.body};
    font-family: ${fonts.poppins};
  }
`;
