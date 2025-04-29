import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Type } from 'class-transformer';
import { MenuItem } from './menuItem.schema';

// Create separate class for nested coordinates
@Schema()
class Coordinates {
  @Prop()
  latitude: number;

  @Prop()
  longitude: number;
}

// Create separate class for address
@Schema()
class Address {
  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  country: string;

  @Prop({ type: Coordinates })
  @Type(() => Coordinates)
  coordinates?: Coordinates;
}

export type RestaurantDocument = HydratedDocument<Restaurant>;

@Schema({ timestamps: true })
export class Restaurant {
  @Prop()
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  cuisineType: string[];

  @Prop({ type: Address, required: true })
  @Type(() => Address)
  address: Address;
  @Prop({ type: [MenuItem], default: [] })
  @Type(() => MenuItem)
  menu: MenuItem[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
