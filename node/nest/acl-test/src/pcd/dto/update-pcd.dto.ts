import { PartialType } from '@nestjs/mapped-types';
import { CreatePcdDto } from './create-pcd.dto';

export class UpdatePcdDto extends PartialType(CreatePcdDto) {}
