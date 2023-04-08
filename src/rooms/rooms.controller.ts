import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { response } from 'express';
import { RoomsService } from './rooms.service';
//nest g co產生controller
@Controller('rooms')
export class RoomsController {

  constructor(private readonly roomsService:RoomsService){}

  @Get()
  findAll2() {
    return this.roomsService.findAll()
    // return 'return all rooms--';
  }
  //nest 路由 /rooms/nest
  // @Get('test')
  // findAll() {
  //   return 'return all rooms';
  // }
  //帶入query 寫法
  @Get('test')
  findAll(@Query() myQuery) {
    const { limit, offset } = myQuery;
    return `my limit ${limit} offset ${offset}`;
  }
  //動態參數範例
  // @Get(':id')
  // findOne(@Param() params) {
  //   console.log(params);
  //   return `return params ${params.id}`;
  // }
  //另一種動態參數寫法(解構)
  @Get(':id')
  findOne2(@Param('id') id: string, @Res() response) {
    return this.roomsService.findOne(id)
    // response.status(200).send(`return params***- ${id}`);
    // console.log(id);
  }
  @Post()
  createRoom(@Body() body) {
    return this.roomsService.createData(body);
  }
  //如果再裝飾器裡面限定回傳的欄位，就只會接收到限定的欄位
  // createRoom(@Body('name') body) {
  //   console.log(body);
  //   return body;
  // }
  @Patch(':id')
  updateRoom(@Param('id') id: string, @Body() body) {
    return this.roomsService.updateData(id,body);
  }
  @Delete(':id')
  delRoom(@Param('id') id: string) {
    return this.roomsService.delOne(id);

  }
}
