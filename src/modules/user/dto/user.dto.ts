import { IsEmpty, IsString } from 'class-validator';

export default class userDto {
  @IsString()
  @IsEmpty()
  name: string;

  @IsString()
  @IsEmpty()
  description: string;

  @IsString()
  @IsEmpty()
  filename: string;
}
