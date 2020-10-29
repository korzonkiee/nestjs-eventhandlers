import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { IEventHandler } from '@nestjs/cqrs/dist/interfaces/events/event-handler.interface';
import { Mammal} from './animal';

@EventsHandler(Mammal)
export class MammalHandler implements IEventHandler<Mammal> {
    handle(event: Mammal) {
        console.log(`mammal`);
    }
}