import {Component} from '@angular/core';
import {Room, RoomService} from '../../services/room.service';

@Component({
    selector : 'chatting-room',
    templateUrl : 'app/components/room-list/room-list.component.html'
})
export class RoomListComponent{
    roomList : Room[] = [];

    constructor(roomService : RoomService) {
        this.roomList = roomService.getRoomList();
    }
}