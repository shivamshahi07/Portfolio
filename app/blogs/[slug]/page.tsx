"use client";

import { useEffect, useState } from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Document } from '@contentful/rich-text-types';
import { notFound } from "next/navigation";

interface BlogPost {
  title: string;
  slug: string;
  body: Document;
  publishedDate: string;
  blogType: string;
  password?: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${params.slug}`);
        if (!response.ok) {
          if (response.status === 404) return notFound();
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) return <div>Loading...</div>;
  if (!post) return notFound();

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
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

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(post.publishedDate).toDateString()}
      </p>
      <div>
        {documentToReactComponents(post.body, renderOptions)}
      </div>
    </div>
  );
}