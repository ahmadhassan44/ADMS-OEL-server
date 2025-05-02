import { Body, Controller, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from './dto/review.dto';

@Controller()
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}
  @Post('add-review')
  addReview(@Body() reviewDto: ReviewDto) {
    return this.reviewService.addReview(reviewDto);
  }
}
