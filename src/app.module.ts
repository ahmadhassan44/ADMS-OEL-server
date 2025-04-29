import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL),
    RestaurantModule,
    MenuModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
