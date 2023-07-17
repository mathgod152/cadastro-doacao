/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {

	constructor(private readonly prisma: PrismaService) { }

	async create(data: CreateUserDTO) {	
		return this.prisma.user.create({
			data,
		});
	}

	async list() {

		return this.prisma.user.findMany()

	}

	async show(id: number) {

		await this.exists(id);

		return this.prisma.user.findUnique({
			where: {
				id,
			}
		})

	}
}
