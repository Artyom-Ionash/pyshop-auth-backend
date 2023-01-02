import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from '../../address/dto/address.dto';

export class UserEntity {
  @ApiProperty({
    required: false,
  })
  id: string;
  @ApiProperty({
    required: false,
  })
  email: string;
  @ApiProperty({
    required: false,
  })
  hash: string;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  name: string | null;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  phone: string | null;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  address: AddressDto | null;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  about: string | null;
}
