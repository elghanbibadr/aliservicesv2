import Faqs from "@/app/componenets/Faqs";
import Container from "@/app/componenets/ui/Container";
import { faqData } from "@/app/data/data";
import { BlogPost, getBlogBySlug, getBlogs } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: Promise<{ blogId: string }>;
};

const SingleBlog = async ({ params }: Props) => {
  const { blogId } = await params; // Await the promise

  if (!blogId) {
    return <div>Error: Missing slug parameter</div>;
  }

  const blog = await getBlogBySlug(blogId);
  const allBlogs = await getBlogs();
  const otherBlogs = allBlogs.filter(
    (other: BlogPost) => other.slug !== blog?.slug
  );

  if (!blog) {
    return <div>Blog not found</div>;
  }


  console.log('blog',blog)
  return (
    <Container>
      <div className="md:mx-auto">
        <div className="m-6 gap-x-8 sm:grid justify-center items-center sm:grid-cols-3">
          <div className="col-span-2">
            <h2 className="my-5 font-bold">{blog.title}</h2>
            <span className="flex gap-2 items-center mb-3 justify-center w-fit">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_138_99)">
                  <path
                    d="M13.2661 1.50249V1.00698C13.2661 0.868456 13.2182 0.748576 13.1223 0.647344C13.0265 0.546111 12.9094 0.495496 12.7709 0.495496C12.6325 0.495496 12.5153 0.546111 12.4195 0.647344C12.3236 0.748576 12.2757 0.868456 12.2757 1.00698V1.50249H8.77741V1.00698C8.77741 0.868456 8.72682 0.748576 8.62565 0.647344C8.52448 0.546111 8.40734 0.495496 8.27422 0.495496C8.14111 0.495496 8.02396 0.546111 7.9228 0.647344C7.82163 0.748576 7.77104 0.868456 7.77104 1.00698V1.50249H4.27273V1.00698C4.27273 0.868456 4.22481 0.748576 4.12896 0.647344C4.03312 0.546111 3.91597 0.495496 3.77753 0.495496C3.63909 0.495496 3.52195 0.546111 3.4261 0.647344C3.33026 0.748576 3.28234 0.868456 3.28234 1.00698V1.50249C2.82442 1.50249 2.40377 1.61438 2.02039 1.83815C1.63701 2.06193 1.33351 2.36563 1.10987 2.74924C0.886232 3.13286 0.774414 3.54844 0.774414 3.99599V12.995C0.774414 13.4532 0.886232 13.8741 1.10987 14.2577C1.33351 14.6413 1.63701 14.945 2.02039 15.1688C2.40377 15.3926 2.82442 15.5045 3.28234 15.5045H13.2661C13.724 15.5045 14.1447 15.3926 14.5281 15.1688C14.9114 14.945 15.2149 14.6413 15.4386 14.2577C15.6622 13.8741 15.774 13.4532 15.774 12.995V3.99599C15.774 3.54844 15.6622 3.13286 15.4386 2.74924C15.2149 2.36563 14.9114 2.06193 14.5281 1.83815C14.1447 1.61438 13.724 1.50249 13.2661 1.50249ZM3.28234 2.4935V3.00499C3.28234 3.14351 3.33026 3.26073 3.4261 3.35663C3.52195 3.45254 3.63909 3.50049 3.77753 3.50049C3.91597 3.50049 4.03312 3.45254 4.12896 3.35663C4.22481 3.26073 4.27273 3.14351 4.27273 3.00499V2.4935H7.77104V3.00499C7.77104 3.14351 7.82163 3.26073 7.9228 3.35663C8.02396 3.45254 8.14111 3.50049 8.27422 3.50049C8.40734 3.50049 8.52448 3.45254 8.62565 3.35663C8.72682 3.26073 8.77741 3.14351 8.77741 3.00499V2.4935H12.2757V3.00499C12.2757 3.14351 12.3236 3.26073 12.4195 3.35663C12.5153 3.45254 12.6325 3.50049 12.7709 3.50049C12.9094 3.50049 13.0265 3.45254 13.1223 3.35663C13.2182 3.26073 13.2661 3.14351 13.2661 3.00499V2.4935C13.6814 2.4935 14.0355 2.64002 14.3284 2.93306C14.6212 3.2261 14.7677 3.58041 14.7677 3.99599V4.50748H1.78078V3.99599C1.78078 3.58041 1.92721 3.2261 2.22006 2.93306C2.51292 2.64002 2.86701 2.4935 3.28234 2.4935ZM13.2661 14.4975H3.28234C2.86701 14.4975 2.51292 14.351 2.22006 14.0579C1.92721 13.7649 1.78078 13.4106 1.78078 12.995V5.49849H14.7677V12.995C14.7677 13.4106 14.6212 13.7649 14.3284 14.0579C14.0355 14.351 13.6814 14.4975 13.2661 14.4975Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_138_99">
                    <rect
                      width="16.01"
                      height="16"
                      fill="white"
                      transform="matrix(1 0 0 -1 0.269531 16)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>{blog.date}</span>
            </span>
            <Image
              height={500}
              width={500}
              src={blog.imageUrl}
              alt={blog.title}
              className="rounded-lg self-center block shadow-md"
            />
            <div>
              <span className="mt-6 block w-fit bg-darkblue text-white bg-lightBlue text-sm font-medium px-6 py-2 rounded-2xl">
                {blog.category}
              </span>
              <p className="mt-2 text-gray-300">{blog.description}</p>
            </div>
          </div>
          <div>
            <h3>Recent posts</h3>
            {otherBlogs.length > 0 ? (
              otherBlogs.map((otherPost: BlogPost) => (
                <Link
                  key={otherPost.slug.current} // Use a unique key, slug or _id
                  href={`/blog/${otherPost.slug.current}`} // Adjust the href based on your blog route structure
                  className="flex items-center gap-x-3 group" // Use group for hover effects if needed
                >
                  <div className="flex-shrink-0">
                    <Image
                      height={60} // Fixed height
                      width={80} // Fixed width
                      src={otherPost.imageUrl}
                      alt={otherPost.title}
                      className="rounded-md object-cover shadow-sm" // Ensure image covers the area
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium  !text-text transition-colors">
                      {/* Truncate title if necessary, or use line-clamp */}
                      {otherPost.title.length > 50
                        ? `${otherPost.title.substring(0, 50)}...`
                        : otherPost.title}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p>No other blogs available.</p>
            )}
          </div>
        </div>
      </div>
     <Faqs faqsData={faqData} />

    </Container>
  );
};

export default SingleBlog;
