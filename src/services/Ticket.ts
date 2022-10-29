import Ticket from '../entities/Ticket';
import { getCustomRepository } from 'typeorm';
import TicketRepository from '../repositories/Ticket';


class TicketService {
  private ticketRepository = getCustomRepository(TicketRepository);

}

export default TicketService;
