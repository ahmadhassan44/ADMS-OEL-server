import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL),
    RestaurantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
