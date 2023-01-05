import { MigrationInterface, QueryRunner } from "typeorm";

export class CarDailyRateUpdate1672936605023 implements MigrationInterface {
  name = "CarDailyRateUpdate1672936605023";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "daily_date"`);
    await queryRunner.query(
      `ALTER TABLE "cars" ADD "daily_rate" integer NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "daily_rate"`);
    await queryRunner.query(
      `ALTER TABLE "cars" ADD "daily_date" numeric NOT NULL`
    );
  }
}
