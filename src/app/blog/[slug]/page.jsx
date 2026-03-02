import BlogPost from '../../../views/BlogPost';
import { getPostBySlug, blogPosts } from '../../../data/blogData';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post no encontrado | Ortodoncia Rajevic',
    };
  }

  return {
    title: `${post.metaTitle} | Ortodoncia Rajevic`,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default function Page({ params }) {
  return <BlogPost slug={params.slug} />;
}