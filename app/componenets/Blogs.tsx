"use client";
import { useState } from "react";
import { BlogPost } from "../lib/sanity";
import Link from "next/link";
import BlogCard from "./BlogCard";

export default function BlogCards({ blogs }: { blogs: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from blogs
  const categories = ["All", ...new Set(blogs.map((post) => post.category))];

  // Filter blogs based on search query and selected category
  const filteredBlogs = blogs.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 rounded-lg mt-20">
      {/* Search Input */}

      {/* Category Filter Buttons */}
      <div className="sm:flex sm:items-center justify-between">
        <div className="flex flex-wrap gap-6 ">
          {categories.map((category) => (
            <span
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`  ${
                selectedCategory !== category
                  ? "text-lightBlue border-lightBlue border-[1px]"
                  : "bg-lightBlue text-white "
              } block w-fit   px-8 py-2 !text-xs  cursor-pointer font-medium   rounded-2xl`}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="mb-6  gap-4">
          <label
            className="text-text mb-2 block text-sm"
            htmlFor=""
          >
            Search by blog title
          </label>
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input !text-sm px-3 py-1"
          />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <Link key={index} 
            href={blog.blogUrl ? blog.blogUrl : `/ressources/${blog.slug.current}`}            >
              <BlogCard blog={blog} />
            </Link>
          ))
        ) : (
          <p className="text-center mx-auto w-fit text-white">
            No blogs found.
          </p>
        )}
      </div>
    </div>
  );
}