import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateReservationTable1667000062974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE reservation (
                id serial PRIMARY KEY,
                user_id serial NOT NULL,
                trip_id int NOT NULL,
                num_of_seats int NOT NULL,
                base_price float NOT NULL,
                discount float NOT NULL,
                final_price float NOT NULL,
                status varchar(45) DEFAULT 'active',
                created_at TIMESTAMP,
                updated_at TIMESTAMP,
                CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES user_account(id),
                CONSTRAINT fk_trip FOREIGN KEY(trip_id) REFERENCES trip(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE reservation;`);
    }

}
