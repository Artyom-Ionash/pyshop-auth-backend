import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty({
    required: false,
  })
  street: string;
  @ApiProperty({
    required: false,
  })
  city: string;
  @ApiProperty({
    required: false,
  })
  state: string;
  @ApiProperty({
    required: false,
  })
  zip: string;
}
