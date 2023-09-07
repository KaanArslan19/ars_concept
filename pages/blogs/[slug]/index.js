import BlogDetails from "@/components/constants/blogs/BlogDetails";
import fs from "fs/promises";

const BlogDetailPage = (props) => {
  return (
    <div>
      <BlogDetails
        id={props.houseData.id}
        date={props.houseData.date}
        title={props.houseData.title}
        description={props.houseData.description}
        type={props.houseData.type}
        imgUrl={props.houseData.imgUrl}
      />
    </div>
  );
};

export default BlogDetailPage;

export async function getStaticPaths() {
  const filePath = "./data.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);
  const paths = data.map((item) => ({
    params: {
      slug: item.title,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const blogId = params.slug;
  const filePath = "./blog.json";
  const rawData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(rawData);
  const filteredBlog = data.find((item) => item.id === blogId);

  return {
    props: {
      houseData: {
        id: filteredBlog.id,
        date: filteredBlog.date,
        title: filteredBlog.title,
        description: filteredBlog.description,
        type: filteredBlog.type,
        imgUrl: filteredBlog.imgUrl,
      },
    },
  };
}
