// app/api/posts/[slug]/route.ts
import * as contentful from 'contentful';
import { NextResponse } from 'next/server';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // First get all entries
    const entries = await client.getEntries({
      content_type: 'blogPage',
      include: 2,
    });

    // Then find the matching post by slug
    const post = entries.items.find((item: any) => 
      item.fields.slug === params.slug || item.sys.id === params.slug
    );

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const formattedPost = {
      title: post.fields.title,
      slug: post.fields.slug || post.sys.id,
      body: post.fields.body,
      publishedDate: post.fields.publishedDate,
      blogType: post.fields.blogType,
      password: post.fields.password || '',
    };

    return NextResponse.json(formattedPost, {
      headers: {
        'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
      },
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Error fetching blog post' },
      { status: 500 }
    );
  }
}