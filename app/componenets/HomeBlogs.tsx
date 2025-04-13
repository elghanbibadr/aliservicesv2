// components/HomeBlogs.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Use Next.js Link for internal navigation
import blogPlaceHolder1 from "@/public/blogPlaceholder1.png"
import blogPlaceHolder2 from "@/public/blogPlaceHolder2.png"
import {  ArrowRight } from 'lucide-react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// Define the type for a single blog post
interface BlogPost {
  id: string | number; // Unique identifier
  slug: string; // URL slug for the post
  imageUrl:string | StaticImport ;
  category: string;
  readTime: string; // e.g., "5 min read"
  title: string;
  excerpt: string;
}

// Sample data - Replace with your actual blog data fetching logic (e.g., from an API or CMS)
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    slug: 'blog-post-one',
    imageUrl: blogPlaceHolder1, // Replace with your image path
    category: 'UI/UX',
    readTime: '5 min read',
    title: 'Blog title heading will go here',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    id: 2,
    slug: 'blog-post-two',
    imageUrl: blogPlaceHolder1, // Replace with your image path
    category: 'Development',
    readTime: '5 min read',
    title: 'Another interesting blog title goes here',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
   {
    id: 3,
    slug: 'blog-post-three',
    imageUrl: blogPlaceHolder2, // Replace with your image path
    category: 'Marketing',
    readTime: '7 min read',
    title: 'Strategies for effective content marketing',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
   {
    id: 4,
    slug: 'blog-post-four',
    imageUrl: blogPlaceHolder2, // Replace with your image path
    category: 'Funding',
    readTime: '6 min read',
    title: 'Navigating startup funding opportunities',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  // Add more posts as needed
];


const HomeBlogs: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto">
            Insights & Strategies for Business Growth
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead with expert insights, industry trends, and practical business strategies. Our blog covers topics like entrepreneurship, marketing, funding opportunities, and operational efficiency to help you make informed decisions and drive success.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-lg"
            >
              {/* Image Section */}
              <div className="flex-shrink-0 mx-4 self-center w-full  md:w-1/3 lg:w-2/5 relative aspect-video sm:aspect-auto">
                {/* Added aspect-video for mobile, sm:aspect-auto lets height be determined by content on larger screens */}
                <Image
                  src={post.imageUrl}
                  alt={`Featured image for ${post.title}`}
                  height={400}
                  width={400}
                  className="" // No specific rounding needed here due to parent's overflow-hidden
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  {/* Metadata */}
                  <div className="flex items-center gap-x-3 mb-3">
                    <span className="inline-block bg-lightGrey text-black px-3 py-1  text-xs font-bold">
                      {post.category}
                    </span>
                    <span className="text-[14px] text-black font-bold">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="!font-semibold !my-4">
                    {/* <Link href={`/blog/${post.slug}`} passHref>
                      <a className="hover:text-blue-700 transition duration-150 ease-in-out">
                        {post.title}
                      </a>
                    </Link> */}
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <span className="small-desc"> {/* Limits text to 3 lines */}
                    {post.excerpt}
                  </span>
                </div>

                {/* Read More Link */}
                <div className="mt-4">
                  <Link href={`/blog/${post.slug}`} >
                    <span className="flex t text-lightBlue items-center gap-2">
                      <span className='text-[15px]'>Read more</span>
                      <ArrowRight className='h-3 text-lightBlue w-6'/>
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Optional: Add a "View All Posts" button here */}
        {/* <div className="mt-12 text-center">
          <Link href="/blog" passHref>
             <a className="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition duration-150 ease-in-out">
               View All Posts
             </a>
          </Link>
        </div> */}

      </div>
    </section>
  );
};

export default HomeBlogs;