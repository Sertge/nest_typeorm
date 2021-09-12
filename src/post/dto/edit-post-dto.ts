import { CreatePostDTO } from '.';
import { PartialType, OmitType } from '@nestjs/mapped-types';

// export class EditPostDTO extends PartialType(
//   OmitType(CreatePostDTO, ['category'] as const),
// ) {}
export class EditPostDTO extends CreatePostDTO {}