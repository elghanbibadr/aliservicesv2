// components/HomeBlogs.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Use Next.js Link for internal navigation

import {  ArrowRight } from 'lucide-react';
import { getBlogs } from '../lib/sanity';




const HomeBlogs: React.FC = async () => {

    const blogs = await getBlogs();

  
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
          {blogs?.map((post,index) => (
            <article
              key={index}
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
                      5min
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="!font-semibold !my-4">

                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <span className="small-desc line-clamp-3"> {/* Limits text to 3 lines */}
                    {post.description}
                  </span>
                </div>

                {/* Read More Link */}
                <div className="mt-4">
                  <Link href={`/blog/${post.slug.current}`} >
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


      </div>
    </section>
  );
};

export default HomeBlogs;