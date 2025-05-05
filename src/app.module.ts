import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MenuModule } from './menu/menu.module';
import { CustomizationsModule } from './customizations/customizations.module';
import { Review } from './schema/review.schema';
import { ReviewModule } from './reviews/review.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL),
    RestaurantModule,
    MenuModule,
    CustomizationsModule,
    ReviewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
