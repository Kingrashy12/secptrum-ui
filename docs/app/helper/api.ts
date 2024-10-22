/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { toast } from 'secptrum-ui';

type ShowCaseFormType = {
  name: string;
  imageUrl: string;
  liveDemoUrl: string;
  description: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  close: () => void;
};

export async function addProject({ ...form }: ShowCaseFormType) {
  form.setIsLoading(true);
  try {
    const response = await axios.post('/api/post', {
      name: form.name,
      imageUrl: form.imageUrl,
      liveDemoUrl: form.liveDemoUrl,
      description: form.description,
    });
    toast.success('Project submitted for review', { transition: 'dropIn' });
    return response?.data;
  } catch (error: unknown) {
    const errorMsg = (error as any).response?.data;
    console.log(errorMsg);
    toast.error(errorMsg, { transition: 'dropIn' });
  } finally {
    form.setIsLoading(false);
    form.close();
  }
}

export async function fetchShowcases() {
  const showcases = await axios.get('/api/get');
  return showcases?.data;
}
