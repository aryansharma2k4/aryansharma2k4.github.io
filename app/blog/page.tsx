import React from 'react'
import blogs from "@/lib/blogs";

const Blog = () => {
    return (
        <div className="mt-12">
            <h1 className="text-end sm:text-5xl text-3xl font-bold text-white">Blogs</h1>
            {blogs.map((blog) => {
                return(
                        <div key={blog.title} className="text-white mt-4" >
                            <h1 className="sm:text-3xl text-2xl font-semibold underline mb-2">{blog.title}</h1>
                            <h3 className="sm:text-xl text-l text-gray-700 font-semibold mb-2">{blog.date}</h3>
                            <p className="text-l text-gray-500 mb-24">{blog.content}</p>
                        </div>
                )
            })}
        </div>
    )
}
export default Blog
