import { Test } from "@nestjs/testing";
import { ContainersService } from "./containers.service";

const mockHeight = {
    height: [1,8,6,2,5,4,8,3,7] 
};

describe('ContainersService', () => {
    let containerService: ContainersService;
  
    beforeEach(async () => {
      const module = await Test.createTestingModule({
        providers: [
            ContainersService
        ],
      }).compile();
  
      containerService = module.get(ContainersService);
    });
  
    describe('It should getMaximumArea', () => {
      it('calls getMaximumArea and returns the result', async () => {

        const result = containerService.getMaximumArea(mockHeight);

        expect(result).toEqual(49);
      });
    });
  
    
  });