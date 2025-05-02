import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import { Review } from 'src/schema/review.schema';
import { ReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(Review.name) private reviewModel: Model<Review>) {}

  async addReview(reviewDto: ReviewDto) {
    return 'hello';
  }
}
