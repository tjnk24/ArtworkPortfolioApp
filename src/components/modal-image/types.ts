import { PhotoDataTypes } from '@helpers/types';
import { ViewType } from 'react-images';

export type ModalImageProps = {
  profileOpened : boolean;
  closeLightbox : () => void;
  currentImage  : number;
  photos        : ViewType[];
};
