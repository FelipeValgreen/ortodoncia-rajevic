import BlogPost from '../../../views/BlogPost';

export default function Page({ params }) {
  return <BlogPost slug={params.slug} />;
}