import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Photo } from './entity/Photo.entity';
import { User } from './entity/User.entity';

createConnection()
  .then(async (connection) => {
    const user: User = new User('Timber', 'Saw', 25);
    const photo: Photo = new Photo('Me and Bears', 'I am near polar bears', 'photo-with-bears.jpg', 1, true);
    const userRepository = connection.getRepository(User);
    const photoRepository = connection.getRepository(Photo);

    await userRepository.save(user);
    await photoRepository.save(photo);

    const savedPhotos: Array<Photo> = await photoRepository.find();
    const photoById: Photo = await photoRepository.findOne(3);
    photoById.name = 'Me, my friends and polar bears';
    await photoRepository.save(photoById);
    await photoRepository.remove(await photoRepository.findOne(2));
    
    console.log('All photos from the db: ', savedPhotos);
    console.log(`Photo from the db with id: ${photoById.id}`);
    
  })
  .catch((error) => console.log(error));
