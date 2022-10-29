import UserDTO from '../dtos/User';
import User from '../entities/User';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/User';


class UserService {
  private userRepository = getCustomRepository(UserRepository);

}

export default UserService;
