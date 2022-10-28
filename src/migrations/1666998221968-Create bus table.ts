import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBusTable1666998221968 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE bus (
                id int PRIMARY KEY,
                plate_num varchar(45) NOT NULL,
                num_of_seats int NOT NULL,
                status varchar(45) DEFAULT 'active',
                created_at TIMESTAMP,
                updated_at TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE bus;`);
    }
    
}
