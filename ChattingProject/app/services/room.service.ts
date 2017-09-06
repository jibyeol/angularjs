export class Room {
    constructor(public id : number,
            public title : string,
            public count : number) {}
}

export class RoomService {
    getRoomList() : Array<Room> {
        return roomList.map(r => new Room(r.id, r.title, r.count));
    }
}

var roomList = [
    {
        "id" : 0,
        "title" : "1번방",
        "count" : 0
    },
    {
        "id" : 1,
        "title" : "2번방",
        "count" : 0
    },
    {
        "id" : 2,
        "title" : "3번방",
        "count" : 0
    },
    {
        "id" : 3,
        "title" : "4번방",
        "count" : 0
    },
    {
        "id" : 4,
        "title" : "5번방",
        "count" : 0
    },
    {
        "id" : 5,
        "title" : "6번방",
        "count" : 0
    }
]