import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
//data
import allBlogPosts from "../../data/allBlogPosts";
//components
import ScrollUpBtn from "../../helpers/ScrollUpBtn";
import ResetLocation from "../../helpers/ResetLocation";
import BlogPosts from "./BlogPosts";

const Blog = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 5);
  const [currentBlogPosts, setcurrentBlogPosts] = useState(
    [...allBlogPosts].reverse().slice(itemOffset, endOffset)
  );
  const [pageCountPosts, setpageCountPosts] = useState(
    Math.ceil(allBlogPosts.length / 5)
  );

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % allBlogPosts.length;
    setItemOffset(newOffset);
    ResetLocation();
  };

  useEffect(() => {
    document.title = "Blog | Traditional Me";
    setEndOffset(itemOffset + 5);
    setcurrentBlogPosts(
      [...allBlogPosts].reverse().slice(itemOffset, endOffset)
    );
    setpageCountPosts(Math.ceil(allBlogPosts.length / 5));
  }, [setEndOffset, endOffset, itemOffset]);
  return (
    <motion.main
      className="blog"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <h2>Blog</h2>
      <p className="blog-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis
        lectus nulla at volutpat diam ut venenatis.
      </p>
      <section className="blog-grid">
        {currentBlogPosts.map((blogPost, index) => {
          return <BlogPosts key={index} blogPost={blogPost} />;
        })}
      </section>
      <ReactPaginate
        className="pagination blog-pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountPosts}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      <ScrollUpBtn />
    </motion.main>
  );
};
export default Blog;
