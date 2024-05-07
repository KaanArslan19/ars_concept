import { client } from "@/client";

const getAllBlogIds = async () => {
  try {
    const blogsQuery = '*[_type == "blogs"]._id';
    const blogsData = await client.fetch(blogsQuery);

    return blogsData;
  } catch (error) {
    console.error("Error fetching blog IDs:", error);
    return [];
  }
};

export default getAllBlogIds;
