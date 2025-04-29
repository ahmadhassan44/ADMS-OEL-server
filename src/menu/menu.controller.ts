import { Controller, Param, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/createMenu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('create/:id')
  async createMenuForRestaurant(
    @Param('id') restaurantId: string,
    createMenuDto: CreateMenuDto,
  ) {
    return this.menuService.createMenuForRestaurant(
      restaurantId,
      createMenuDto,
    );
  }
}
