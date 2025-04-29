import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MenuItemDocument = HydratedDocument<MenuItem>;

@Schema()
export class MenuItem {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  preparationTime: number;

  @Prop()
  images: string[];

  @Prop()
  customizations: string[]; // Array of customization IDs
}

export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
