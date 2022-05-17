import { Test, TestingModule } from "@nestjs/testing";
import { ContainersController } from "./containers.controller";
import { ContainersService } from "./containers.service";

describe('ContainersController', ()=>{
    let controller: ContainersController;

    beforeEach(async () => {
        const module : TestingModule = await Test.createTestingModule({
            controllers: [ContainersController],
            providers : [ContainersService]
        }).compile();

        controller = module.get<ContainersController>(ContainersController);
    });

    it('It Should be defined', () => {
        expect(controller).toBeDefined();
    })

    it('It should get max container', ()=>{
        const result = controller.getMaximumArea({height: [1,1] })

        expect(result).toEqual(1);

    })
});