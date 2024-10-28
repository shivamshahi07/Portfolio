"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PasswordPrompt } from "@/components/ui/password-modal";

interface BlogPost {
  title: string;
  slug: string;
  body: any;
  publishedDate: string;
  blogType: string;
  password?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const fetchedPosts = await response.json();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const handleBlogClick = (post: BlogPost) => {
    if (post.blogType === "personal") {
      setSelectedPost(post);
      setShowPasswordPrompt(true);
    } else {
      router.push(`/blogs/${post.slug}`);
    }
  };
  const handlePasswordSubmit = (password: string) => {
    if (selectedPost && password === selectedPost.password) {
      setShowPasswordPrompt(false);
      router.push(`/blogs/${selectedPost.slug}`);
    } else {
      //TODO: add a shake animation or error message here
      alert("Incorrect password");
    }
  };

  if (loading) {
    return <div className="h-screen">Loading blog posts...</div>;
  }
  if (error) {
    return <div className="h-screen text-red-500">Error: {error}</div>;
  }

  if (!posts.length) {
    return <div className="h-screen">No blog posts found.</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-6">
            <button
              onClick={() => handleBlogClick(post)}
              className="text-2xl text-blue-600 underline"
            >
              {post.title}
            </button>
            <p className="text-sm text-gray-500">
              {new Date(post.publishedDate).toDateString()}
            </p>
            <p className="text-gray-700 mt-2">
              {post.body.content[0].content[0].value.split("\n")[0]}...
            </p>
          </li>
        ))}
      </ul>
      <PasswordPrompt
        isOpen={showPasswordPrompt}
        onClose={() => {
          setShowPasswordPrompt(false);
          setSelectedPost(null);
        }}
        onSubmit={handlePasswordSubmit}
        title={selectedPost?.title || ''}
      />
    </div>
  );
}