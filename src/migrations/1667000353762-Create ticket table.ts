import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTicketTable1667000353762 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE ticket (
                id serial PRIMARY KEY,
                reservation_id serial NOT NULL,
                trip_id int NOT NULL,
                bus_seat_id int NOT NULL,
                status varchar(45) DEFAULT 'active',
                created_at TIMESTAMP,
                updated_at TIMESTAMP,
                CONSTRAINT fk_reservation FOREIGN KEY(reservation_id) REFERENCES reservation(id),
                CONSTRAINT fk_trip FOREIGN KEY(trip_id) REFERENCES trip(id),
                CONSTRAINT fk_bus_seat FOREIGN KEY(bus_seat_id) REFERENCES bus_seat(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE ticket;`);
    }

}
