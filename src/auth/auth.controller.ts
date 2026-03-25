import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportLocalGuard } from './guards/passport-local.guard';
import { PasspoerJwtAuthGuard } from './guards/passport-jwt.guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({ summary: 'User Login' })
  @ApiBody({ type: LoginDto }) // Shows the schema in Swagger UI
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UseGuards(PassportLocalGuard)
  login(@Request() request) {
    return this.authService.signIn(request.user);
  }

  @ApiBearerAuth('JWT-auth')  
  @ApiOperation({ summary: 'Get current user profile' })
  @Get('me')
  @UseGuards(PasspoerJwtAuthGuard)
  getUserInfo(@Request() request) {
    return request.user;
  }
}
