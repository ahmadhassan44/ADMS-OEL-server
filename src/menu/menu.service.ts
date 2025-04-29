import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/createMenu.dto';

@Injectable()
export class MenuService {
  async createMenuForRestaurant(
    restaurantId: string,
    createMenuDto: CreateMenuDto,
  ) {}
}
