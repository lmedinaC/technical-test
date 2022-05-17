import { Body, Controller, Post, Query, ValidationPipe } from '@nestjs/common';
import { ContainersService } from './containers.service';
import { GetArrayDTO } from './get-array.dto';

@Controller('containers')
export class ContainersController {
    constructor(private containersService: ContainersService){}

    @Post('/maximum-area')
    getMaximumArea(@Body() height: GetArrayDTO)  {
        const maximumArea = this.containersService.getMaximumArea(height); 
        return maximumArea;
    }

}
