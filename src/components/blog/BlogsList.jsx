import { blogData } from "../../data/staticData";
import BlogItem from "./BlogItem";

function BlogsList() {
  return (
    <div className="flex items-start justify-between gap-[20px]">
      <div className="flex min-h-[100vh] w-full flex-col gap-[60px]">
        {blogData?.map((b) => {
          return <BlogItem key={b.id} blog={b} />;
        })}
      </div>

      <div className="hidden h-[1000px] w-[400px]  p-[10px] sm:block">
        <h3 className="border-b border-lightGray py-[10px] text-2xl">
          Recent Posts
        </h3>

        {blogData?.slice(0, 4)?.map((b) => {
          return (
            <div key={b.id} className="my-[15px] flex items-center gap-[10px]">
              <img
                src={b.image}
                alt={b.title}
                className="w-[100px] rounded-xl"
              />
              <div className="text-sm">
                <h5 className="font-bold">{b.title?.slice(0, 20)}...</h5>
                <span className="text-xs text-lightGray">
                  September 7, 2020
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsList;
