import { PartialType } from '@nestjs/mapped-types';
import { CreateIotcDto } from './create-iotc.dto';

export class UpdateIotcDto extends PartialType(CreateIotcDto) {}
