import { PhotoDataTypes } from '@helpers/types';
import { SetStateAction, Dispatch } from 'react';

export type ModalImageProps = {
  profileOpened   : boolean;
  closeLightbox   : () => void;
  currentImage    : number;
  setCurrentImage : Dispatch<SetStateAction<number>>;
  photos          : PhotoDataTypes[];
};
