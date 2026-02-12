
import React from 'react';
import BlogCard from './BlogCard';

const BlogGrid = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return <p>No hay artículos disponibles en este momento.</p>;
    }

    return (
        <div className="grid-3" style={{ gap: '2rem' }}>
            {posts.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default BlogGrid;
