import { Controller, UsePipes, Get, Post, Delete, Put, ValidationPipe } from '@nestjs/common'
import { Body, Res } from '@nestjs/common/decorators'
import { CreateUser, CreateUserDTO } from '@modules/user/use-case/create-user'

@Controller('/users')
export class UserController {
    constructor(private readonly createUser: CreateUser) { }

    @Post('/register')
    @UsePipes(new ValidationPipe())
    async create(@Body() body: CreateUserDTO, @Res() res) {
        // @ts-expect-error
        const response = await this.createUser.perform(body)

        console.log(`[Server]: Request="/users/register" Response="${response.getStatus()}"`)

        return res.status(response.getStatus()).send(response.getResult())
    }
}
