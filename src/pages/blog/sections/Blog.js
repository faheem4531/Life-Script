import BlogImage from "@/__webAssets/pngs/blog-img.png";
import { Box } from "@mui/material";
import MapCard from "./MapCard";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // "http://localhost:1337/api/blogs?populate=*",
          "http://ec2-51-20-134-5.eu-north-1.compute.amazonaws.com:1337/api/blogs?populate=*",
          {
            // headers: {
            //   Authorization:
            //     "Bearer 55496982242408ad9256d47a743fabce457d62609fb539e9d0a9a5ac9977ec853c535129d50c609e69194f95889e9605485389b62315bd415b9583c6a04bec8a93680797762c2fcd4c3ba00b7108dc34468ddc0c69825e40181fc6d495ed55b69c33791e96f8b27b171173810d67fe2a794d382aa5b4b2cca46640fc35935cde"
            //     // 5f5f24d7f2f70b26f4ca522825d4d4518447e797f1ffe0ea90421c9616587c5cab46a39284e47205d53bdee71d2a8fa594ce43ae460c543aa81241248af5a5f42b5daee51652cb69811a0fa98488a40176a4f47a598000490424162b1b768d0ad2b27d89f9bf0268ec2608c28e3c8149005cebe6db9584f109ec235cd9b8c107",
            // },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBlogsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(blogsData, "Hello");
  const baseUrl = "http://ec2-51-20-134-5.eu-north-1.compute.amazonaws.com:1337";
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {blogsData &&
        blogsData?.data?.map((item, index) => {
          console.log(item,"Image issue")
          const imageUrl =
          item.attributes.image.data[0] &&
          baseUrl + item.attributes.image.data[0].attributes.url;
         
            console.log(imageUrl,"URl=====")
          return (
            <MapCard
              key={index}
              title={item.attributes?.title}
              date={`Published by ${item.attributes?.author} on ${item.attributes?.datePublish}`}
              image={imageUrl}
              details={item.attributes?.description}
            />
          );
        })}
    </Box>
  );
};
// Issues For distrubing

export default Blogs;
