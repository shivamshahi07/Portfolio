"use client";

import { useState, useEffect } from "react";
import { fetchBlogPosts } from "@/lib/contentful";
import { useRouter } from "next/navigation";
interface BlogPost {
    title: string;
    slug: string;
    body: any; // You can type this further depending on the structure of the body
    publishedDate: string;
    blogType: string;
    password?: string;
  }

export default function Blog() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Used for navigation

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const fetchedPosts = await fetchBlogPosts();
        //@ts-ignore
        setPosts(fetchedPosts);
        console.log("Fetched blog posts:", fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);
  //@ts-ignore
  const handleBlogClick = (post) => {
    if (post.blogType === "personal") {
      const enteredPassword = prompt("Enter the password for this blog:");
      if (enteredPassword === post.password) {
        // Password is correct, navigate to the blog post
        router.push(`/blogs/${post.slug}`);
      } else {
        alert("Incorrect password");
      }
    } else {
      // For professional blogs, just navigate directly
      router.push(`/blogs/${post.slug}`);
    }
  };

  if (loading) {
    return <div className="h-screen">Loading blog posts...</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul>
        {posts.map((post) => (
          //@ts-ignore
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
            {/* Show only the first line of the body */}
            <p className="text-gray-700 mt-2">
              {post.body.content[0].content[0].value.split("\n")[0]}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
