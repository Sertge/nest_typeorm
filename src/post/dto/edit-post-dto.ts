import { CreatePostDTO } from '.';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class EditPostDTO extends PartialType(
  OmitType(CreatePostDTO, ['id'] as const),
) {}