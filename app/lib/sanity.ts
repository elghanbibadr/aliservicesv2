import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: 'vvvu3q4c', // Replace with your actual Project ID
  dataset: 'production', 
  apiVersion: '2024-03-11', 
  useCdn: true,
});
export interface BlogPost {
  category: string;
  title: string;
  description: string;
  blogUrl:string
  imageUrl: string ;
   slug: {
    current: string;
    _type: "slug";
  };
  date: string; // Represents an ISO 8601 date string
}


export async function getBlogs(): Promise<BlogPost[]> {
  return await sanityClient.fetch(
    `*[_type == "blog"]{
      title,
      slug,
      category,
      description,
      date,
      blogUrl,
      "imageUrl": image.asset->url
    }`
  ,undefined,{ next: { revalidate: 1 } });
}


// Function to fetch a single blog post by slug
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    title,
    slug,
    category,
    description,
    date,
    blogUrl,
    "imageUrl": image.asset->url
  }`;

  const blog = await sanityClient.fetch(query, { slug });

  return blog || null;
}