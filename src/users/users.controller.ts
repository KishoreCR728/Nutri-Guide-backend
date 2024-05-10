import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, ParseIntPipe, Req, Res, InternalServerErrorException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { BMIDto } from './dto/bmi.dto';
import { Request, Response } from 'express';
import { er } from '@fullcalendar/core/internal-common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get('/:id')
  // async findFirstNameById(@Param('id', ParseIntPipe) id: number): Promise<string> {
  //   const firstName = await this.usersService.findFirstNameById(+id);
  //   if (firstName === null) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }
  //   return firstName;
  // }

  @Post('bmi')
  async storeBMI(@Req() req:Request, @Res() res:Response, @Body() bmiDto: BMIDto): Promise<any> {
    try {
      return await this.usersService.storeBMI(bmiDto);
    } catch (error) {
      throw new NotFoundException('Failed to store BMI details.');
    }
  }

  // @Get('/:id')
  // async findNameById(@Param('id') id: number): Promise<any> {
  //   try {
  //     const name = await this.usersService.findNameById(id);
  //     return name;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  @Get('getNameById/:id')
  async findNameById(@Param('id') id: number,
   @Req() req:Request,
   @Res() res:Response) {
    try {
      console.log(id, 'jjjjjjjjjjj');
      let data = await this.usersService.findNameById(id);
      res.status(HttpStatus.OK).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        message: [],
      });
    }
  }

  @Get('getBmiCalculations')
  async getAllBmiCalculations(
   @Req() req:Request,
   @Res() res:Response) {
    try {
      let data = await this.usersService.getAllBmiCalculations();
      res.status(HttpStatus.OK).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        message: [],
      });
    }
  }
}
