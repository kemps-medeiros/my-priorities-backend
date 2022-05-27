import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Put } from '@nestjs/common';
import { PrioritiesService } from './priorities.service';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';

@Controller('app/api/priorities')
export class PrioritiesController {
  constructor(private readonly prioritiesService: PrioritiesService) {}

  @Post()
  async create(@Body() createPriorityDto: CreatePriorityDto) {
    return await this.prioritiesService.create(createPriorityDto);
  }

  @Get()
  async findAll() {
    return await this.prioritiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.prioritiesService.findOneOrFail({id});
  }

  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updatePriorityDto: UpdatePriorityDto) {
    return await this.prioritiesService.update(id, updatePriorityDto);
  }

  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.prioritiesService.remove(id);
  }
}
