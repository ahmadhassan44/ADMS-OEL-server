import { Module } from '@nestjs/common';
import { CustomizationService } from './customizations.service';
import { CustomizationsController } from './customizations.controller';
import { Restaurant, RestaurantSchema } from 'src/schema/restaurant.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Restaurant.name, schema: RestaurantSchema },
    ]),
  ],
  controllers: [CustomizationsController],
  providers: [CustomizationService],
})
export class CustomizationsModule {}
