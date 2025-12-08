"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/data/blogPosts.js";


const BlogPostClientPage = ({ slug }) => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const currentPost = blogPosts.find((post) => post.slug === slug);
  const currentIndex = blogPosts.findIndex((post) => post.slug === slug);

  useEffect(() => {
    // Trigger entrance animation
    setIsLoaded(true);
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug]);
  
  const handleContactClick = () => {
    router.push("/#contact");
  };

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article not found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Parse markdown-like content to HTML
  const renderContent = (content) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={index} className="font-semibold text-foreground mt-4 mb-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-muted-foreground ml-4 mb-1">
            {line.replace("- ", "")}
          </li>
        );
      }
      if (line.trim() === "") {
        return <br key={index} />;
      }
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <main className={cn(
      "pt-24 pb-16 transition-all duration-500",
      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    )}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Article List */}
          <aside className="lg:w-80 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-24 bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-4">
              <Link 
                href="/blog" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Articles</span>
              </Link>
              
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Articles
              </h3>
              
              <nav className="space-y-1">
                {blogPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-xl transition-all duration-300 group",
                      post.slug === slug
                        ? "bg-primary/10 border border-primary/30"
                        : "hover:bg-muted/50"
                    )}
                  >
                    <span className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                      post.slug === slug
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    )}>
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={cn(
                        "text-sm font-medium line-clamp-2 transition-colors",
                        post.slug === slug
                          ? "text-primary"
                          : "text-foreground group-hover:text-primary"
                      )}>
                        {post.title}
                      </p>
                      <span className="text-xs text-muted-foreground mt-1 block">
                        {post.category}
                      </span>
                    </div>
                    {post.slug === slug && (
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 min-w-0">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{currentPost.emoji_icon}</span>
                <span className={cn(
                  "px-3 py-1 rounded-full text-xs font-semibold border",
                  currentPost.category === "Local SEO" && "bg-badge-local/10 text-badge-local border-badge-local/30",
                  currentPost.category === "Website Design" && "bg-badge-web/10 text-badge-web border-badge-web/30",
                  currentPost.category === "Digital Marketing" && "bg-badge-seo/10 text-badge-seo border-badge-seo/30",
                  currentPost.category === "Google Ads" && "bg-badge-ads/10 text-badge-ads border-badge-ads/30",
                  currentPost.category === "Case Studies" && "bg-badge-case/10 text-badge-case border-badge-case/30"
                )}>
                  {currentPost.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {currentPost.title}
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentPost.read_time_minutes} min read</span>
                </div>
                <span>•</span>
                <span>Article {currentIndex + 1} of {blogPosts.length}</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none bg-card/30 rounded-2xl border border-border p-6 md:p-8">
              {renderContent(currentPost.content)}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-border">
              {currentIndex > 0 ? (
                <Link
                  href={`/blog/${blogPosts[currentIndex - 1].slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <span className="text-xs block">Previous</span>
                    <span className="text-sm font-medium line-clamp-1 max-w-[200px]">
                      {blogPosts[currentIndex - 1].title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              
              {currentIndex < blogPosts.length - 1 ? (
                <Link
                  href={`/blog/${blogPosts[currentIndex + 1].slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group text-right"
                >
                  <div>
                    <span className="text-xs block">Next</span>
                    <span className="text-sm font-medium line-clamp-1 max-w-[200px]">
                      {blogPosts[currentIndex + 1].title}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default BlogPostClientPage;
