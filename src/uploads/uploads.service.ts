import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class UploadsService {
  private readonly uploadsBaseDir = 'uploads';
  constructor() {
    // Ensure the base uploads directory exists
    this.ensureDirectoryExists(this.uploadsBaseDir);
  }

  private async ensureDirectoryExists(directory: string): Promise<void> {
    try {
      await fs.access(directory);
    } catch (error) {
      await fs.mkdir(directory, { recursive: true });
    }
  }
  async uploadImage(
    file: Express.Multer.File,
    subDirectory: string = '',
  ): Promise<string> {
    // Create full upload directory path
    const uploadDir = path.join(this.uploadsBaseDir, subDirectory);

    // Ensure the target directory exists
    await this.ensureDirectoryExists(uploadDir);

    // Generate a unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    const filename = `image-${uniqueSuffix}${fileExtension}`;

    // Full path where the file will be saved
    const filePath = path.join(uploadDir, filename);

    // Write the file to disk
    await fs.writeFile(filePath, file.buffer);

    // Return the relative path to be stored in the database
    return path.join(subDirectory, filename);
  }

  async uploadMultipleImages(
    files: Express.Multer.File[],
    subDirectory: string = '',
  ): Promise<string[]> {
    // Process each file and collect the paths
    const uploadPromises = files.map((file) =>
      this.uploadImage(file, subDirectory),
    );
    return Promise.all(uploadPromises);
  }
  testFunction() {
    console.log('i am here ');
  }
}
