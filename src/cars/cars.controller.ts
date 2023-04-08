import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCarById(@Param('id') id: number) {
    const car = this.carsService.findOneById(+id);
    return car;
  }
}
