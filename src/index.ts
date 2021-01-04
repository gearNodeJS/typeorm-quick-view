import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Photo } from './entity/Photo.entity';
import { User } from './entity/User.entity';

createConnection()
  .then(async (connection) => {
    const user = new User('Timber', 'Saw', 25);
    await connection.manager.save(user);

    const photo: Photo = new Photo('Me and Bears', 'I am near polar bears', 'photo-with-bears.jpg', 1, true);
    await connection.manager.save(photo).then((photo: Photo) => console.log(`Photo has been saved. Photo id is ${photo.id}`));
    const savedPhotos: Array<Photo> = await connection.manager.find(Photo);
    console.log('All photos from the db: ', savedPhotos);
    
  })
  .catch((error) => console.log(error));
