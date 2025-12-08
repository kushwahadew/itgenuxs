"use client";

import { useState, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogCard from "@/components/blog/BlogCard";
import BlogCTA from "@/components/blog/BlogCTA";
import { blogPosts } from "@/data/blogPosts.js";


const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogSectionRef = useRef(null);
  const router = useRouter();

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleScrollToBlogs = () => {
    blogSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleContactClick = () => {
    router.push("/#contact");
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          <BlogHero
            onContactClick={handleContactClick}
            onScrollToBlogs={handleScrollToBlogs}
          />

          {/* Blog Section */}
          <section ref={blogSectionRef} id="blog" className="py-16 md:py-20">
            <div className="container space-y-12">
              <BlogFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              {/* Blog Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={post.slug} post={post} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    No blogs found matching your search.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>

          <BlogCTA onContactClick={handleContactClick} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
