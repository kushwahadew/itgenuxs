import { use } from "react";
import { blogPosts } from "@/data/blogPosts.js";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogPostClientPage from "@/components/blog/BlogPostClientPage";

export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { slug } = params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | ITGENIXS Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://itgenixs.com/blog/${post.slug}`,
    },
  };
}

const BlogPostPage = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);
  const { slug } = params;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BlogPostClientPage slug={slug} />
      <Footer />
    </div>
  );
};

export default BlogPostPage;