import { Injectable } from '@nestjs/common';
import { Container } from './container';
import { GetArrayDTO } from './get-array.dto';

@Injectable()
export class ContainersService {

    getMaximumArea(getArrayDTO : GetArrayDTO) : Number {
        const {height} = getArrayDTO;
        const container = new Container(height);
        const maximumArea = container.getMaximumArea();
        return maximumArea;
    }
}
