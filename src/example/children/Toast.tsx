import { toast } from "../../components/Toast/Toast";
import Button from "../../components/Button/Button";
import Stack from "../../components/Stack/Stack";
import { generateId } from "../../lib/helper";

export const InfoToast = () => {
  function log() {
    toast.info("Your acccount was logged out", { position: "top-right" });
  }
  return (
    <Stack>
      <Button onClick={log}>Logout</Button>
    </Stack>
  );
};

export const ErrorToast = () => {
  function log() {
    toast.error("You don't have permission to carry out this action", {
      position: "top-right",
    });
  }
  return (
    <Stack>
      <Button onClick={log}>Transfer data</Button>
    </Stack>
  );
};

export const SuccessToast = () => {
  function log() {
    const id = generateId();
    toast.success(
      `Congratulations, your account has been successfully created id: ${id}`,
      { position: "top-left" }
    );
  }
  return (
    <Stack>
      <Button onClick={log}>Create</Button>
    </Stack>
  );
};
