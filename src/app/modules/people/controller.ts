import { Controller, UsePipes, Get, Post, Delete, Put, ValidationPipe } from '@nestjs/common'
import { Body, Res } from '@nestjs/common/decorators'
import { CreatePeople, CreatePeopleDTO } from '@modules/people/use-case/create-people'

@Controller('/peoples')
export class PeopleController {
    constructor(private readonly createPeople: CreatePeople) {}

    @Post('/register')
    @UsePipes(new ValidationPipe())
    async create(@Body() body: CreatePeopleDTO, @Res() res) {
        const response = await this.createPeople.perform(body)

        return res.status(response.getStatus()).send(response.getResult())
    }
}
