import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomizationDocument = HydratedDocument<Customization>;

@Schema()
export class Customization {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;
}
export const CustomizationSchema = SchemaFactory.createForClass(Customization);
