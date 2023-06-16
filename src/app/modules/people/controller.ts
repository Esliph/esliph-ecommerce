import { Controller, UsePipes, Get, Post, Delete, Put, ValidationPipe } from '@nestjs/common'
import { Body, Res } from '@nestjs/common/decorators'

@Controller('/peoples')
export class PeopleController {
    constructor() {}
}
