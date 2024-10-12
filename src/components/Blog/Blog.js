import React from 'react';
import AOS from 'aos'; // For scroll animations
import 'aos/dist/aos.css'; // AOS styles

const Blog = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'How AI is Revolutionizing Education',
      description: 'AI technology is changing the way we learn by providing personalized learning paths...',
      date: 'September 20, 2024',
      author: 'John Doe',
      image: '/images/blog-ai-education.jpg', // Add your blog image here
      tags: ['AI', 'Education', 'Technology'],
    },
    {
      id: 2,
      title: 'The Future of Remote Learning',
      description: 'With the rise of remote learning, technology is playing a huge role in shaping education...',
      date: 'October 5, 2024',
      author: 'Jane Smith',
      image: '/images/blog-remote-learning.jpg', // Add your blog image here
      tags: ['Remote Learning', 'Future', 'Technology'],
    },
    {
      id: 3,
      title: 'Building Scalable EdTech Platforms',
      description: 'Scaling an EdTech platform requires robust infrastructure and innovative solutions...',
      date: 'October 15, 2024',
      author: 'Mark Taylor',
      image: '/images/blog-scalable-platforms.jpg', // Add your blog image here
      tags: ['Scalability', 'EdTech', 'Infrastructure'],
    },
  ];

  return (
    <section className="bg-gray-100 py-20 text-center">
      <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Latest Blog Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            data-aos="fade-up"
          >
            {/* Featured Image */}
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />

            {/* Blog Title */}
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>

            {/* Blog Date and Author */}
            <div className="text-gray-500 text-sm mb-4">
              <span>{post.date}</span> | <span>By {post.author}</span>
            </div>

            {/* Blog Description */}
            <p className="text-gray-600 mb-4">{post.description}</p>

            {/* Tags */}
            <div className="mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-tangering text-white text-sm px-3 py-1 rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Read More Button */}
            <a
              href="#"
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
