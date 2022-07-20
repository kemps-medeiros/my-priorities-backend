import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegexHelper } from 'src/helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(RegexHelper.password, {
    message:
      'The password must contain uppercase, lowercase, numbers and special characters',
  })
  password: string;
}
