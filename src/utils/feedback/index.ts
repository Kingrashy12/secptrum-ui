import { ModalPanelType } from "../../components/modal/ModalPanel";
import { dropIn, slideIn, walkIn, walkOut } from "../../styles/animations";

const getPanelSize = (size: ModalPanelType["size"]) => {
  switch (size) {
    case "sm":
      return `
                  width: 300px;
              `;
    case "md":
      return `
                  width: 400px;
              `;
    case "lg":
      return `
        width: 500px;
  
        @media screen and (max-width:550px){
        width: 90%;
        }
              `;
    case "xl":
      return `
        width: 600px;
        
        @media screen and (max-width:550px){
        width: 90%;
        }
        `;
    case "full":
      return `
        width: 60%;
  
        @media screen and (max-width:1024px){
        width: 80%;
        }
        @media screen and (max-width:550px){
        width: 90%;
        }
        `;
  }
};

const getModalPanelTransition = (
  transition: ModalPanelType["transition"],
  isVisible: boolean
) => {
  switch (transition) {
    case "walkIn":
      return `
        animation: ${isVisible ? walkIn : walkOut} 0.5s ease-in-out; 
        `;
    case "dropIn":
      return `
        animation: ${dropIn} 0.5s ease-in-out;
        `;
    case "slideIn":
      return `
        animation: ${slideIn} 0.5s ease-in-out;
        `;
  }
};

export { getPanelSize, getModalPanelTransition };
