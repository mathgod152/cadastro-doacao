import { Test, TestingModule } from "@nestjs/testing"
import { UserService } from "./user.service"

test('Este é o meu primeiro teste', () => {

    let userService:

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [UserService]
        }).compile();

        userService = module.get<UserService>(UserService);

    });

    test('Validar a definição', () => {
        expect(userService).toBeDefined();
    })

})

