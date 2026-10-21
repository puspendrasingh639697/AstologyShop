import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useBlogStore } from '../store/useBlogStore'; // Path check kar lein
import { BiCalendar, BiRightArrowAlt } from 'react-icons/bi';
import useBlogStore from '../store/useBlogStore';

const Blog = () => {
  const { blogs, loading, error, fetchPublicBlogs } = useBlogStore();

  useEffect(() => {
    fetchPublicBlogs();
    window.scrollTo(0, 0);
  }, [fetchPublicBlogs]);

  if (loading) return <div className="text-center py-20 text-xl">Loading Articles...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif text-[#5A1F1F] mb-2">Our Blog</h1>
          <p className="text-gray-600 text-sm">Discover spiritual knowledge, rituals, and remedies.</p>
        </div>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">No articles published yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                to={`/blog/${blog.slug}`} 
                key={blog._id} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden h-52">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-[#B58A3A] font-medium mb-2">
                    <BiCalendar /> {new Date(blog.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                  
                  <h2 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2 group-hover:text-[#5A1F1F]">
                    {blog.title}
                  </h2>
                  
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto flex items-center text-[#5A1F1F] font-semibold text-sm group-hover:gap-2 transition-all">
                    Read Article <BiRightArrowAlt className="text-xl" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;