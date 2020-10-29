import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MammalHandler } from './mammal.handler';

export const EventHandlers = [MammalHandler];

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [AppService, ...EventHandlers],
})
export class AppModule {}
