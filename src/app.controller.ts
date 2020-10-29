import { Controller, Get } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { Dolphin, Dove, Monkey } from './animal';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly eventBus: EventBus) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('dolphin')
  getDolhpin(): string {
    this.eventBus.publish(new Dolphin());
    return 'ok';
  }

  @Get('monkey')
  getMonkey(): string {
    this.eventBus.publish(new Monkey());
    return 'ok';
  }

  @Get('dove')
  getDove(): string {
    this.eventBus.publish(new Dove());
    return 'ok';
  }
}
