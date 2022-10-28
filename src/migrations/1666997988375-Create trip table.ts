import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTripTable1666997988375 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE trip (
                id int PRIMARY KEY,
                name varchar(45),
                destination varchar(45) NOT NULL,
                distance int NOT NULL,
                price float NOT NULL,
                status varchar(45) DEFAULT 'active',
                pickup_location varchar(100) NOT NULL,
                created_at TIMESTAMP,
                updated_at TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE trip;`);
    }
    
}
