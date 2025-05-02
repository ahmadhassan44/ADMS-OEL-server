import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomizationDto } from './dto/customization.dto';
import { CustomizationService } from './customizations.service';

@Controller()
export class CustomizationsController {
  constructor(private readonly customizationService: CustomizationService) {}
  @Post('customize/:restaurantId/:menuItemId')
  async customize(
    @Param('restaurantId') restaurantId: string,
    @Param('menuItemId') menuItemId: string,
    @Body() customizationData: CustomizationDto,
  ) {
    return this.customizationService.customize(
      restaurantId,
      menuItemId,
      customizationData,
    );
  }
  @Get('customizations/:restaurantId')
  async getAllCustomizationsForARestaurant(
    @Param('restaurantId') restaurantId: string,
  ) {
    return this.customizationService.getAllCustomizationsForARestaurant(
      restaurantId,
    );
  }
}
