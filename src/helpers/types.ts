type SinglePhotoTypes = 'src' | 'width' | 'height' | 'header' | 'text';

export type PhotoDataTypes = Record<SinglePhotoTypes, string>;

export type PhotoTypes = {
  dataValues: {
    filename : string;
    header   : string;
    text     : string;
  }
  width  : string;
  height : string;
};
