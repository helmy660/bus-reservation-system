import ReservationDTO from '../dtos/Reservation';
import Reservation from '../entities/Reservation';
import { getCustomRepository } from 'typeorm';
import ReservationRepository from '../repositories/Reservation';


class ReservationService {
  private reservationRepository = getCustomRepository(ReservationRepository);

}

export default ReservationService;
