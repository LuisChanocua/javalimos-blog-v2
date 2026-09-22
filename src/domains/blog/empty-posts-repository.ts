import type { PostsRepository } from "./posts-repository";

export const emptyPostsRepository: PostsRepository = {
  async list() {
    return [];
  },

  async findBySlug() {
    return null;
  },
};

export const localPostsRepository = emptyPostsRepository;
