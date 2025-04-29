import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from 'src/schema/restaurant.schema';
import { CreateRestaurantDto } from './dto/createRestaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
  ) {}
  async createRestaurant(createRestaurantDto: CreateRestaurantDto) {
    const restaurant = new this.restaurantModel(createRestaurantDto);
    return restaurant.save();
  }
}
