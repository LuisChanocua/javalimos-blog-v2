import { posts } from "@/content/posts";
import type { BlogPost } from "@/types/content";
import type { PostsRepository } from "./posts-repository";

function sortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export const localPostsRepository: PostsRepository = {
  async list() {
    return sortedPosts();
  },

  async findBySlug(slug) {
    return posts.find((post) => post.slug === slug) ?? null;
  },
};
