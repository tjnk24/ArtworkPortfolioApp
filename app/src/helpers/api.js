const API_URL = 'http://localhost:3002';

export async function getPhotos () {

    console.log('trying to get photos...');

    const response = await fetch(`${API_URL}/photos`);
    const photoData = await response.json();

    console.log(photoData);

    // if (!photoData.success || photoData.photos.count < 1)
    //     return [];

    if (!photoData.success)
           return [];

    // return photoData.photos.rows.map(photo => ({
    //     src: `${API_URL}/photos/${photo.filename}`,
    //     width: 1,
    //     height: 1,
    // }));
};