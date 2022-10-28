import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBusSeatTable1666999356986 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE bus_seat (
                id int PRIMARY KEY,
                bus_id int NOT NULL,
                seat_id int NOT NULL,
                CONSTRAINT UC_BUS UNIQUE (bus_id,seat_id),
                CONSTRAINT fk_bus FOREIGN KEY(bus_id) REFERENCES bus(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE bus_seat;`);
    }

}
