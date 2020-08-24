import { PhotoDataTypes, PhotoTypes } from './types';

const API_URL = 'http://localhost:3001'; // TODO: move to .env

const getPhotos = async (): Promise<PhotoDataTypes[]> => {
  const response = await fetch(`${API_URL}/photo`);
  const photoData = await response.json();

  if (!photoData.success || photoData.photos.count < 1) { return []; }

  return photoData.photos.rows.map((photo: PhotoTypes) => ({
    src: `${API_URL}/photo/${photo.dataValues.filename}`,
    width: photo.width,
    height: photo.height,
    header: photo.dataValues.header,
    text: photo.dataValues.text,
  }));
};

export default getPhotos;
