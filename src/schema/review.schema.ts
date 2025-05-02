import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { MenuItem } from './menuItem.schema';
import { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

export class Review {
  @Prop({ required: true })
  customerName: string;

  @Prop({ required: true })
  restaurantId: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  reviewText: string;

  @Prop({})
  dishes: MenuItem[];
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
