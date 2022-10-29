import { EntityRepository, Repository } from 'typeorm';
import Trip from '../entities/Trip';


@EntityRepository(Trip)
class TripRepository extends Repository<Trip> {
}

export default TripRepository;
