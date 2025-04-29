import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MenuItemDocument = HydratedDocument<MenuItem>;

@Schema()
class MenuItem {
  @Prop({ required: true })
  name: string;
  description: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  preparationTime: number;
  images: string[];
}

export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
