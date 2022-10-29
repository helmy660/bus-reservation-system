import Trip from '../entities/Trip';
import { getCustomRepository } from 'typeorm';
import TripRepository from '../repositories/Trip';


class TripService {
  private tripRepository = getCustomRepository(TripRepository);

}

export default TripService;
