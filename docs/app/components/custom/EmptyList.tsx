import React from 'react';
import { Button, Stack } from 'secptrum-ui';
import { HiCollection } from 'react-icons/hi';
import { useShowcaseForm } from '@/context/useShowCase';

const EmptyList = () => {
  const { onOpen } = useShowcaseForm();
  return (
    <Stack spacing="lg">
      <HiCollection className="collection" size={80} />
      <p className="empty-list">
        No projects to showcase yet. Be the first to submit your project!
      </p>
      <Button radius="lg" onClick={onOpen}>
        Submit Your Project
      </Button>
    </Stack>
  );
};

export default EmptyList;
