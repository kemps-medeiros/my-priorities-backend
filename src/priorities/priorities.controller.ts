import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Put, UseGuards } from '@nestjs/common';
import { PrioritiesService } from './priorities.service';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/priorities')
export class PrioritiesController {
  constructor(private readonly prioritiesService: PrioritiesService) { }


  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPriorityDto: CreatePriorityDto) {
    return await this.prioritiesService.create(createPriorityDto);
  }


  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.prioritiesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.prioritiesService.findOneOrFail({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Get('findDescriptionsByUserId/:user_id')
  async findDescriptions(@Param('user_id') userId: string) {
    return await this.prioritiesService.findDescriptionsByUserId(userId)
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updatePriorityDto: UpdatePriorityDto) {
    return await this.prioritiesService.update(id, updatePriorityDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.prioritiesService.remove(id);
  }
}
