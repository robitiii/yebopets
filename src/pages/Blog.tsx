
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Essential Tips for New Pet Owners in South Africa",
    excerpt: "Bringing a new pet into your home is exciting but can be overwhelming. Here are essential tips to help new pet owners in South Africa get started on the right paw.",
    date: "May 15, 2025",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?fit=crop&w=600&h=400",
    category: "Pet Care"
  },
  {
    id: 2,
    title: "The Best Dog-Friendly Parks in Cape Town",
    excerpt: "Cape Town has many beautiful parks where your canine companion can run, play, and socialize. Discover our top picks for dog-friendly parks in the Mother City.",
    date: "May 5, 2025",
    author: "Michael Ndlovu",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?fit=crop&w=600&h=400",
    category: "Local Guides"
  },
  {
    id: 3,
    title: "Understanding Your Cat's Body Language",
    excerpt: "Cats communicate primarily through body language. Learn to decode your feline friend's signals to better understand their needs and emotions.",
    date: "April 22, 2025",
    author: "Thandi Nkosi",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?fit=crop&w=600&h=400",
    category: "Cat Care"
  },
  {
    id: 4,
    title: "Seasonal Pet Health Concerns in South Africa",
    excerpt: "Each season brings different health challenges for pets in South Africa. From summer heat to winter chills, learn how to keep your pets healthy year-round.",
    date: "April 10, 2025",
    author: "Dr. James Wilson",
    image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?fit=crop&w=600&h=400",
    category: "Pet Health"
  },
  {
    id: 5,
    title: "How to Choose the Right Pet Food",
    excerpt: "With countless pet food options available, choosing the right one can be confusing. This guide helps you understand pet nutrition and make informed choices.",
    date: "March 28, 2025",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?fit=crop&w=600&h=400",
    category: "Nutrition"
  },
  {
    id: 6,
    title: "5 Fun Indoor Activities for Pets",
    excerpt: "When outdoor time is limited, these creative indoor activities will help keep your pet physically active and mentally stimulated.",
    date: "March 15, 2025",
    author: "Michael Ndlovu",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?fit=crop&w=600&h=400",
    category: "Pet Activities"
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog - YeboPets";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yebo-teal to-yebo-navy text-white py-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Pet Care Blog</h1>
            <p className="text-xl opacity-90">
              Expert tips, advice, and insights for pet owners in South Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-yebo-light text-yebo-teal px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-yebo-navy">
                    <Link to={`/blog/${post.id}`} className="hover:text-yebo-teal transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-yebo-teal hover:text-yebo-navy font-medium transition-colors flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-yebo-light py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-yebo-navy mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest pet care tips, advice, and YeboPets updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yebo-teal"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
