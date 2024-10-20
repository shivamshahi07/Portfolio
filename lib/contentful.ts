import { createClient } from 'contentful';

const client = createClient({
    //@ts-ignore
  space: process.env.CONTENTFUL_SPACE_ID,
  //@ts-ignore
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchBlogPosts() {
  const entries = await client.getEntries({ content_type: 'blogPage' });
  return entries.items.map((item) => {
    
    return {
        title: item.fields.title as any,
        slug: item.fields.slug || item.sys.id, // Fetch the slug and use id as fallback if slug is missing
        body: item.fields.body as any,
        publishedDate: item.fields.publishedDate as any,
        //@ts-ignore
        image: item.fields.images?.[0]?.fields?.file?.url || '', // Assuming it's an array
        blogType: item.fields.blogType, // Fetch the blog type
        password: item.fields.password || '', // Fetch the password (if private blog)
      };

  });
}
