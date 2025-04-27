import Image from 'next/image'
import React from 'react'
import { BlogPost } from '../lib/sanity'

const BlogCards = ({blog}:{blog:BlogPost}) => {

    console.log("blog",blog)

  return (
    <div className="bg-secondaryblack py-8 px-6 rounded-3xl overflow-hidden shadow-2xl">
      <div className="relative mx-auto">
        <Image
          className="rounded-2xl"
          height={900}
          width={500}
          src={blog.imageUrl}
          alt={blog.title}
        />
      </div>
      <span className="mb-10 mt-6 block w-fit bg-darkblue text-white bg-lightBlue text-sm font-medium px-6 py-2 rounded-2xl">
        {blog.category}
      </span>
      <div>
        <span className="text-[18px] text-heading  font-semibold mt-2">
          {blog.title}
        </span>
        <span className="line-clamp-3 my-4 small-desc">{blog.description}</span>
        <span  className="inline-block mt-3 text-xs font-bold text-heading">
          Read more →
        </span>
      </div>
    </div>
  )
}

export default BlogCards