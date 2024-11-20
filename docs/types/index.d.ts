declare type ListType = {
  bold_text: string;
  item_text: string;
};

declare type ListContent = {
  li: ListType[];
};

declare type ContentType = {
  id: string;
  text: string;
};

declare type ContextProviderType = {
  children: React.ReactNode;
};

declare type ModalContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

declare type ReferenceType = {
  reference: {
    prop: string;
    type: string;
    description: string;
    default: string;
  }[];
};

declare type ShowCaseType = {
  id: string;
  name: string;
  imageurl: string;
  livedemourl: string;
  description: string;
};
