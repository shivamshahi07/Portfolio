// app/api/posts/route.ts (App Router)
import * as contentful from 'contentful';
import { NextResponse } from 'next/server';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export async function GET() {
  try {
    const entries = await client.getEntries({ 
      content_type: 'blogPage',
      include: 2
    });

    const posts = entries.items.map((item: any) => ({
      title: item.fields.title,
      slug: item.fields.slug || item.sys.id,
      body: item.fields.body,
      publishedDate: item.fields.publishedDate,
      image: item.fields.images?.[0]?.fields?.file?.url || '',
      blogType: item.fields.blogType,
      password: item.fields.password || '',
    }));

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Error fetching blog posts' },
      { status: 500 }
    );
  }
}