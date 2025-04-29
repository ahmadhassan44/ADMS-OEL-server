import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenuDto } from './dto/createMenu.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from 'src/schema/restaurant.schema';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
  ) {}

  async createMenuForRestaurant(
    restaurantId: string,
    createMenuDto: CreateMenuDto,
  ) {
    const restaurant = await this.restaurantModel.findById(restaurantId);

    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant with ID ${restaurantId} not found`,
      );
    }
    restaurant.menu.push(...createMenuDto.menuItems);

    return restaurant.save();
  }
  async getRestaurantMenu(restaurantId: string) {
    const restaurant = await this.restaurantModel.findById(restaurantId);

    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant with ID ${restaurantId} not found`,
      );
    }

    return restaurant.menu;
  }
}
