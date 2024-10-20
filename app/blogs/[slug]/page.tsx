import { fetchBlogPosts } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import { BLOCKS } from "@contentful/rich-text-types";

// This function gets called at build time on the server
export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
//@ts-ignore
export default async function BlogPost({ params }) {
  const { slug } = params;
  const posts = await fetchBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return notFound(); // Show 404 if the post is not found
  }

  const renderOptions = {
    renderNode: {
        //@ts-ignore
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file } = node.data.target.fields;
        const imageUrl = file.url.startsWith("//")
          ? `https:${file.url}`
          : file.url;
        return (
          <div className="my-6">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        );
      },
    },
  };
//@ts-ignore
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(post.publishedDate).toDateString()}
      </p>
      <div>{documentToReactComponents(post.body, renderOptions)}</div>
    </div>
  );
}
