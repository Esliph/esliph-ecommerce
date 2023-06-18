import { Controller, UsePipes, Get, Post, Delete, Put, ValidationPipe } from '@nestjs/common'
import { Body, Res } from '@nestjs/common/decorators'
import { CreatePeople, CreatePeopleDTO } from '@modules/people/use-case/create-people'

@Controller('/peoples')
export class PeopleController {
    constructor(private readonly createPeople: CreatePeople) { }

    @Post('/register')
    @UsePipes(new ValidationPipe())
    async create(@Body() body: CreatePeopleDTO, @Res() res) {
        const { active, email, name, type, birthday, cnpj, gender, itin } = body

        const response = await this.createPeople.perform({ active, email, name, type, birthday, cnpj, gender, itin })

        console.log(`[Server]: Request=/peoples/register Response=${response.status} ok=${response.ok}`)

        return res.status(response.status).send(response)
    }
}
