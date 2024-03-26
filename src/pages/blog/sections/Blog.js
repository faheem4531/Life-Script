import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import MapCard from "./MapCard";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // "http://localhost:1337/api/blogs?populate=*",
          "https://strapi.thelifescript.com/api/blogs?populate=*",
          // {
          //   headers: {
          //     Authorization:
          //       "Bearer 5f5f24d7f2f70b26f4ca522825d4d4518447e797f1ffe0ea90421c9616587c5cab46a39284e47205d53bdee71d2a8fa594ce43ae460c543aa81241248af5a5f42b5daee51652cb69811a0fa98488a40176a4f47a598000490424162b1b768d0ad2b27d89f9bf0268ec2608c28e3c8149005cebe6db9584f109ec235cd9b8c107",
          //   },
          // }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();

        if (!Array.isArray(responseData.data)) {
          console.error(
            "Data received from the API does not contain an array:",
            responseData.data
          );
          return; 
        }

        // Sort the data based on publish date in descending order
        const sortedData = responseData.data.sort(
          (a, b) =>
            new Date(b.attributes.datePublish) -
            new Date(a.attributes.datePublish)
        );
        setBlogsData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(blogsData, "Hello");
  // const baseUrl = "http://ec2-51-20-134-5.eu-north-1.compute.amazonaws.com:1337";
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* {console.log("bbbbbbbb", blogsData)} */}
      {blogsData &&
        blogsData?.map((item, index) => {
          // console.log(item,"Image issue")
          const imageUrl =
            item.attributes.image.data[0] &&
            item.attributes.image.data[0].attributes.url;

          // console.log(imageUrl,"URl=====")
          return (
            <MapCard
              key={index}
              title={item.attributes?.title}
              date={`Published by ${item.attributes?.author} on ${item.attributes?.datePublish}`}
              image={imageUrl}
              details={item.attributes?.description}
              caption={item.attributes.image.data[0].attributes.caption}
            />
          );
        })}
    </Box>
  );
};


export default Blogs;
