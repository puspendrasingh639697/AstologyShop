import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useBlogStore from '../store/useBlogStore';
import { BiArrowBack, BiUser, BiCalendar } from 'react-icons/bi';
import { Helmet } from 'react-helmet-async';

const BlogDetails = () => {
  const { slug } = useParams();
  const { singleBlog: blog, loading, error, fetchBlogBySlug, clearSingleBlog } = useBlogStore();

  useEffect(() => {
    fetchBlogBySlug(slug);
    window.scrollTo(0, 0);
    return () => clearSingleBlog();
  }, [slug, fetchBlogBySlug, clearSingleBlog]);

  if (loading) return <div className="text-center py-20 text-xl text-black">Loading Article...</div>;
  if (error || !blog) return <div className="text-center py-20 text-red-500">Article not found!</div>;

  return (
    <div className="bg-white min-h-screen pb-20">
      <Helmet>
        <title>{blog.metaTitle || blog.title} | Aaradhya</title>
        <meta name="description" content={blog.metaDescription || blog.excerpt} />
      </Helmet>

      {/* ✅ Simple Hero Image Section */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl leading-tight text-white">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-200 text-sm mt-2">
              <span className="flex items-center gap-2"><BiUser className="text-[#B58A3A]" /> {blog.author}</span>
              <span className="flex items-center gap-2">
                <BiCalendar className="text-[#B58A3A]" /> {new Date(blog.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
        </div>
      </div>

      {/* ✅ Main Content Area */}
      <div className="max-w-[800px] mx-auto px-4 py-10">
        
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#5A1F1F] font-semibold mb-8 hover:underline">
          <BiArrowBack /> Back to Blogs
        </Link>

        {/* ✅ ADMIN BASE STYLING: Direct tags ko style kiya gaya hai */}
        <div 
          className="
            text-gray-800 text-[17px] leading-[1.8]
            
            /* Paragraphs - Proper spacing like Admin */
            [&_p]:mb-5 [&_p]:mt-0
            
            /* Headings - Proper size and margin */
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#5A1F1F] [&_h2]:mt-8 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mt-6 [&_h3]:mb-3
            
            /* Lists - Bullet points with spacing */
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-2
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol]:space-y-2
            [&_li]:pl-1
            
            /* Strong Text */
            [&_strong]:text-black [&_strong]:font-bold
          "
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />

        {/* Tags Section */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-gray-200 flex items-center gap-3 flex-wrap">
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Tags:</span>
            {blog.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;