import { Injectable, NotFoundException } from '@nestjs/common';
import { Rooms } from './entities/rooms.entities';

@Injectable()
export class RoomsService {
  private rooms:Rooms[] = [
    {
      id:1,
      name:"test1"
    }
  ];
  findAll(){
    return this.rooms;
  }
  findOne(id:string){
    // console.log('id---**', id);
    const tmpRoomArr  = this.rooms.find((item) => item.id === +id);
    console.log('id***',id,tmpRoomArr)
    if (!!!tmpRoomArr) {
      throw new NotFoundException("not found rooms")
    }
    return tmpRoomArr;
  }
  createData(obj:any){
    this.rooms.push(obj);
    return this.rooms
  }
  updateData(id:string,content:any){
    return this.rooms.map(item=>{
      if(item.id === +id){
        item.name = content.name;
      }
      return item;
    })
  }
  delAll(){
    this.rooms = []
    return this.rooms;
  }
  delOne(id:string){
    this.rooms = this.rooms.filter(item=>{
      item.id !== +id
    });
    return this.rooms;
  }
}
