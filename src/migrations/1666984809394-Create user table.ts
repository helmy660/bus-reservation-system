import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1666984809394 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE user_account (
                id serial PRIMARY KEY,
                name varchar(45),
                email varchar(45) UNIQUE NOT NULL,
                password varchar(255) NOT NULL,
                role varchar(255) DEFAULT 'customer',
                created_at TIMESTAMP,
                updated_at TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE user_account;`);
    }
    
}
