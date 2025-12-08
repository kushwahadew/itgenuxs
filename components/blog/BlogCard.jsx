import { Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categoryColors = {
  "Local SEO": "bg-badge-local/10 text-badge-local border-badge-local/30",
  "Website Design": "bg-badge-web/10 text-badge-web border-badge-web/30",
  "Digital Marketing": "bg-badge-seo/10 text-badge-seo border-badge-seo/30",
  "Google Ads": "bg-badge-ads/10 text-badge-ads border-badge-ads/30",
  "Case Studies": "bg-badge-case/10 text-badge-case border-badge-case/30",
};

const BlogCard = ({ post, index }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative bg-gradient-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card Content */}
      <div className="relative p-6 space-y-4">
        {/* Top Row: Emoji & Category */}
        <div className="flex items-start justify-between">
          <span className="text-4xl" role="img" aria-label="blog icon">
            {post.emoji_icon}
          </span>
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-semibold border",
              categoryColors[post.category] || "bg-muted text-muted-foreground border-border"
            )}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer: Read Time */}
        <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{post.read_time_minutes} min read</span>
        </div>

        {/* Read More Indicator */}
        <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Read article</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
