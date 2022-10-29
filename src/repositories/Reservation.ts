import { EntityRepository, Repository } from 'typeorm';
import Reservation from '../entities/Reservation';
import User from '../entities/User';


@EntityRepository(Reservation)
class ReservationRepository extends Repository<Reservation> {
  getListByUser(user: User): Promise<Reservation[]> {
    return this.find({ user });
  }
}

export default ReservationRepository;
