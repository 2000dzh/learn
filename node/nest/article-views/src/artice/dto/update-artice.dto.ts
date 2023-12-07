import { PartialType } from '@nestjs/mapped-types';
import { CreateArticeDto } from './create-artice.dto';

export class UpdateArticeDto extends PartialType(CreateArticeDto) {}
