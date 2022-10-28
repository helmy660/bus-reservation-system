import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTripBusTable1666998426781 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE trip_bus (
                trip_id int NOT NULL,
                bus_id int NOT NULL,
                status varchar(45) DEFAULT 'active',
                PRIMARY KEY(trip_id, bus_id),
                CONSTRAINT fk_trip FOREIGN KEY(trip_id) REFERENCES trip(id),
                CONSTRAINT fk_bus FOREIGN KEY(bus_id) REFERENCES bus(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE trip_bus;`);
    }

}
