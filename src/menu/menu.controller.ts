import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
  UploadedFiles,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  BadRequestException,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/createMenu.dto';
import { UploadsService } from 'src/uploads/uploads.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('menu')
export class MenuController {
  constructor(
    private readonly menuService: MenuService,
    private readonly uploadsService: UploadsService,
  ) {}

  @Post('restaurant/:id')
  @UseInterceptors(FilesInterceptor('items', 10))
  async createMenuForRestaurant(
    @Param('id') restaurantId: string,
    @Body() body: any,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg|webp)' }),
        ],
        fileIsRequired: false,
      }),
    )
    files: Array<Express.Multer.File>,
  ) {
    let menuItems = body.menuItems;
    try {
      if (typeof menuItems === 'string') {
        menuItems = JSON.parse(menuItems);
      }

      const createMenuDto: CreateMenuDto = {
        menuItems: menuItems,
      };

      const fileUrls = await this.uploadsService.uploadMultipleImages(files);
      return this.menuService.createMenuForRestaurant(
        restaurantId,
        createMenuDto,
      );
    } catch (error) {
      throw new BadRequestException(
        'Failed to parse menuItems: ' + error.message,
      );
    }
  }

  @Get('restaurant/:id')
  async getRestaurantMenu(@Param('id') restaurantId: string) {
    return this.menuService.getRestaurantMenu(restaurantId);
  }
}
