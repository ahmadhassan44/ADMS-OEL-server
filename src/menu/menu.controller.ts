import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/createMenu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('restaurant/:id')
  async createMenuForRestaurant(
    @Param('id') restaurantId: string,
    @Body() createMenuDto: CreateMenuDto,
  ) {
    return this.menuService.createMenuForRestaurant(
      restaurantId,
      createMenuDto,
    );
  }

  @Get('restaurant/:id')
  async getRestaurantMenu(@Param('id') restaurantId: string) {
    return this.menuService.getRestaurantMenu(restaurantId);
  }
}
