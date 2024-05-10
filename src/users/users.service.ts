import { Injectable } from '@nestjs/common';
import { Connection, EntityManager, Repository, getConnection, getManager } from 'typeorm';
import { BMIDto } from './dto/bmi.dto';
import { InjectDataSource, InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { aW } from '@fullcalendar/core/internal-common';
import { BmiCalculations } from './entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UsersService {
  // constructor(private readonly connection: Connection, @InjectEntityManager() private readonly entityManager: EntityManager,
  // @InjectRepository() 
  // private readonly bmiCalculationsRepository:BmiCalculations) {}

  constructor(
    private readonly connection: Connection,
    @InjectDataSource() private dataSource: DataSource,
  ) {}

  async storeBMI(bmiDto: BMIDto): Promise<any> {
    console.log("entered storeBMI")
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();
      const qb = queryRunner.manager.createQueryBuilder();
      await qb
        .insert()
        .into('bmi_calculations')
        .values({
          name: bmiDto.name,
          age: bmiDto.age,
          gender: bmiDto.gender,
          mobile: bmiDto.mobile,
          email: bmiDto.email,
          dob: bmiDto.dob,
          height: bmiDto.height,
          weight: bmiDto.weight,
          bmi: bmiDto.bmi,
          bmiCategory: bmiDto.bmiCategory,
          minHealthyBmi: bmiDto.minHealthyBmi,
          maxHealthyBmi: bmiDto.maxHealthyBmi,
          healthyWeightForHeight: bmiDto.healthyWeightForHeight,
          gainToHealthyBmi: bmiDto.gainToHealthyBmi,
          loseToHealthyBmi: bmiDto.loseToHealthyBmi,
          ponderalIndex: bmiDto.ponderalIndex,
        })
        .execute();

      await queryRunner.commitTransaction();

      return 'BMI data inserted successfully';
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async findNameById(id){
    const result = await this.dataSource.query(`
      SELECT * FROM bmi_calculations WHERE id = ${id};
    `);
    return result
  }


  async getAllBmiCalculations() {
    const result = await this.dataSource.query(`SELECT * FROM bmi_calculations`);
    return result;
  }
  
}
