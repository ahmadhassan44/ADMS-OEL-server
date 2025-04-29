  import {
    IsNotEmpty,
    IsNotEmptyObject,
    IsString,
  } from 'class-validator';
  export class CreateRestaurantDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    description?: string;

    cuisineType: string[];

    @IsNotEmptyObject()
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      coordinates?: {
        latitude: number;
        longitude: number;
      };
    };
  }
