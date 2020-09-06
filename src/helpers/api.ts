import { PhotoDataTypes, PhotoTypes } from './types';

const getPhotos = async (): Promise<PhotoDataTypes[]> => {
  const photoData = await fetch(`${process.env.API_URL}/photo`)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });

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
