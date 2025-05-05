import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: memoryStorage(), // Just use memory storage, no filtering here
    }),
  ],
  providers: [UploadsService],
  exports: [UploadsService, MulterModule],
})
export class UploadsModule {}
