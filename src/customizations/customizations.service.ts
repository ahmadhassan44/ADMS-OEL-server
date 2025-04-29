import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from 'src/schema/restaurant.schema';
import { CustomizationDto } from './dto/customization.dto';

@Injectable()
export class CustomizationService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
  ) {}

  async customize(
    restaurantId: string,
    menuItemId: string,
    customizationData: CustomizationDto,
  ) {
    const restaurant = await this.restaurantModel.findById(restaurantId);

    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant with ID ${restaurantId} not found`,
      );
    }

    const menuItemIndex = restaurant.menu.findIndex(
      (item) => item['_id'].toString() === menuItemId,
    );

    if (menuItemIndex === -1) {
      throw new NotFoundException(`Menu item with ID ${menuItemId} not found`);
    }

    if (!restaurant.menu[menuItemIndex].customizations) {
      restaurant.menu[menuItemIndex].customizations = [];
    }

    restaurant.menu[menuItemIndex].customizations.push(customizationData);

    await restaurant.save();

    return {
      success: true,
      message: 'Customization added successfully',
      menuItem: restaurant.menu[menuItemIndex],
    };
  }
}
