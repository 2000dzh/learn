import { PartialType } from '@nestjs/mapped-types';
import { CreateWocDto } from './create-woc.dto';

export class UpdateWocDto extends PartialType(CreateWocDto) {}
