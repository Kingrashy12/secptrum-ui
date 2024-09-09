import React from "react";
import Toast from "./Toast";

/**
 * Represents the properties for a story test component.
 * @property {React.ReactNode} [children] - The child elements to be rendered, used only for story tests.
 * @property {boolean} [isStory] - Flag to indicate if the component is a story.
 *
 * @remarks This type is intended for use in story testing only and should not be used in real components.
 */
type StoryTestType = {
  /**
   * @param children is intended for use in story testing only and should not be used in real components.
   */
  children?: React.ReactNode;
  /**
   * @param isStory Flag to indicate if the component is a story, This should not be used in real components.
   * - `Note` This should not be used outside of a Storybook environment.
   */
  isStory?: boolean;
};

const Toaster = ({ children, isStory }: StoryTestType) => {
  return (
    <>
      <Toast />
      {isStory ? children : null}
    </>
  );
};

export default Toaster;
