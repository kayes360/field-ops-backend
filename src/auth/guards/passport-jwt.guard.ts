import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
 

@Injectable()

export class PasspoerJwtAuthGuard extends AuthGuard('jwt'){}
