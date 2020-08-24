export type CustomViewProps = {
  isModal: boolean;
  modalProps: {
    onClose: () => void;
  };
  data: {
    src: string;
    header: string;
    text: string;
  };
  currentIndex : number;
}
