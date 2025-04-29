import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/createRestaurant.dto';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post('create')
  async createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.createRestaurant(createRestaurantDto);
  }

  @Get('get')
  async getRestaurants() {
    return this.restaurantService.getRestaurants();
  }
}
