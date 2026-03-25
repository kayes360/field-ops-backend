import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ 
    description: 'The registered email address of the user',
    example: 'alice.johnson@example.com',
    required: true 
  })
  email: string;

  @ApiProperty({ 
    description: 'The account password',
    example: 'hashed_password_1',
    required: true,
    format: 'password'  
  })
  password: string;
}