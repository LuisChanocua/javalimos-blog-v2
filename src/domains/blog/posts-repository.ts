import type { BlogPost } from "@/types/content";
import { shouldUseEmptyContentSource } from "@/config/content-source";
import { emptyPostsRepository } from "./empty-posts-repository";

export interface PostsRepository {
  list(): Promise<readonly BlogPost[]>;
  findBySlug(slug: string): Promise<BlogPost | null>;
}

let localRepositoryPromise: Promise<PostsRepository> | undefined;

async function getLocalPostsRepository(): Promise<PostsRepository> {
  localRepositoryPromise ??= import("@/domains/blog/local-posts-repository").then(
    (module) => module.localPostsRepository,
  );

  return localRepositoryPromise;
}

const deferredLocalPostsRepository: PostsRepository = {
  async list() {
    return (await getLocalPostsRepository()).list();
  },

  async findBySlug(slug) {
    return (await getLocalPostsRepository()).findBySlug(slug);
  },
};

export const postsRepository: PostsRepository = shouldUseEmptyContentSource
  ? emptyPostsRepository
  : deferredLocalPostsRepository;
