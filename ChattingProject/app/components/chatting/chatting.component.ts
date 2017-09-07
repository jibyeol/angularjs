import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoomService, Room} from '../../services/room.service';

@Component({
    selector : 'chatting',
    templateUrl : 'app/components/chatting/chatting.component.html'
})
export class ChattingComponent{
    room : Room;

    constructor(route : ActivatedRoute, roomService : RoomService) {
        this.room = roomService.getRoomListByRoomId(route.snapshot.params['roomId']);
    }
}