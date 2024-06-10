import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
  @WebSocketServer() server!: Server;

  constructor() {}

  afterInit() {
    console.log('Socket server initialized');
  }
}
