import BlogItem from "./BlogItem";

function BlogsList() {
  return (
    <div className="flex min-h-[100vh] flex-col gap-[60px]">
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
}

export default BlogsList;
