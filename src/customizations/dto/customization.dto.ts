import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CustomizationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
