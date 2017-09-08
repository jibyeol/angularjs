export class Room {
    constructor(public id : number,
            public title : string,
            public description : string,
            public count : number) {}
}

export class RoomService {
    getRoomList() : Array<Room> {
        return roomList.map(r => new Room(r.id, r.title, r.description, r.count));
    }
    getRoomListByRoomId(roomId : number) : Room {
        return this.getRoomList().find(r => r.id == roomId);
    }
}

var roomList = [
    {
        "id" : 0,
        "title" : "1번방",
        "description" : "room description.!!1111",
        "count" : 0
    },
    {
        "id" : 1,
        "title" : "2번방",
        "description" : "room description.!!2222",
        "count" : 0
    },
    {
        "id" : 2,
        "title" : "3번방",
        "description" : "room description.!!3333",
        "count" : 0
    },
    {
        "id" : 3,
        "title" : "4번방",
        "description" : "room description.!!4444",
        "count" : 0
    },
    {
        "id" : 4,
        "title" : "5번방",
        "description" : "room description.!!5555",
        "count" : 0
    },
    {
        "id" : 5,
        "title" : "6번방",
        "description" : "room description.!!6666",
        "count" : 0
    }
]