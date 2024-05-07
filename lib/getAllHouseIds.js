import { client } from "@/client";

const getAllHouseIds = async () => {
  try {
    const recordsQuery = '*[_type == "records"]._id';
    const recordsData = await client.fetch(recordsQuery);

    return recordsData;
  } catch (error) {
    console.error("Error fetching house IDs:", error);
    return [];
  }
};

export default getAllHouseIds;
