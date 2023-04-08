import { Injectable } from '@nestjs/common';
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
    return this.rooms.find(item=>item.id === +id)
  }
  createData(obj:any){
    this.rooms.push(obj);
    return this.rooms
  }
  updateData(id:string,content:any){
    return this.rooms.map(item=>{
      if(item.id === +id){
        item.name = content;
      }
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
