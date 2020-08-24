import { PhotoDataTypes, PhotoTypes } from './types';

const getPhotos = async (): Promise<PhotoDataTypes[]> => {
  const response = await fetch(`${process.env.API_URL}/photo`);
  const photoData = await response.json();

  if (!photoData.success || photoData.photos.count < 1) { return []; }

  return photoData.photos.rows.map((photo: PhotoTypes) => ({
    src: `${process.env.API_URL}/photo/${photo.dataValues.filename}`,
    width: photo.width,
    height: photo.height,
    header: photo.dataValues.header,
    text: photo.dataValues.text,
  }));
};

export default getPhotos;
