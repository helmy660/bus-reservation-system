import { EntityRepository, Repository } from 'typeorm';
import Ticket from '../entities/Ticket';
import Reservation from '../entities/Reservation';


@EntityRepository(Ticket)
class TicketRepository extends Repository<Ticket> {
    getListByReservationId(reservation: Reservation): Promise<Ticket[]> {
        return this.find({ reservation });
    }
}

export default TicketRepository;





