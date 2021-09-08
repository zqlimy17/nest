import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
