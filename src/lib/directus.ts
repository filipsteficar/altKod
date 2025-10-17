import { createDirectus, rest } from '@directus/sdk';

// Blog Posts
type Post = {
    id: string;
    status: string;
    date_created: string;
    date_updated: string;
    title: string;
    slug: string;
    author: Author;
    cover: string;
    cover_alt_text: string;
    post_content: string;
    // SEO
    page_description: string;
    // Many To Many - Array of Related Categories
    categories: Category[];
}

// Category (Many To Many)
type Category = {
  id: string;
  title: string;
  slug: string;
  description?: string; // Optional Descripition
};

// Author
type Author = {
    id: string;
    name: string;
    slug: string;
    avatar: string;
    bio: string;
}

type Schema = {
    // Key Must Match Directus 100%
    posts: Post[];
    categories: Category[];
    authors: Author[];
}

const directus = createDirectus<Schema>('https://altkod.apollo.filipsteficar.com/').with(rest());

export default directus;