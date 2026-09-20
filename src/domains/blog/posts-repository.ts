import type { BlogPost } from "@/types/content";
import { localPostsRepository } from "./local-posts-repository";

export interface PostsRepository {
  list(): Promise<readonly BlogPost[]>;
  findBySlug(slug: string): Promise<BlogPost | null>;
}

export const postsRepository: PostsRepository = localPostsRepository;
