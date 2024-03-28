import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import MapCard from "./MapCard";
import { Circles } from "react-loader-spinner";


const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5);
  const [paginateData, setPaginateData] = useState({});
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          // "http://localhost:1337/api/blogs?populate=*",
          // "https://strapi.thelifescript.com/api/blogs?populate=*",
          `https://strapi.thelifescript.com/api/blogs?pagination[page]=${currentPage}&pagination[pageSize]=${blogsPerPage}&populate=*`

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
        setPaginateData(responseData.meta.pagination);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, [currentPage]);

  console.log(blogsData, "Hello");

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* {console.log("bbbbbbbb", blogsData)} */}
      {/* Loader */}
      {loading && (
        <Box sx={{
          margin: {
            lg: "200px auto 120px",
            md: "180px auto 150px",
            sm: "120px auto 100px",
            xs: "100px 20px 80px",
          },
          maxWidth: { lg: "1050px", md: "850px", sm: "570px", xs: "100%" },
        }}>
          <Circles
              height="80"
              width="80"
              color="#B4522D"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
        </Box>
      )}
      {!loading && (
        <>
          {blogsData &&
            blogsData.map((item, index) => {
              const imageUrl =
                item.attributes.image.data[0] &&
                item.attributes.image.data[0].attributes.url;

              return (
                <MapCard
                  key={index}
                  slug={item.id}
                  title={item.attributes?.title}
                  date={`Published by ${item.attributes?.author} on ${item.attributes?.datePublish}`}
                  image={imageUrl}
                  details={item.attributes?.description}
                  caption={item.attributes.image.data[0].attributes.caption}
                />
              );
            })}

          {/* Pagination */}
          <Box mt={2} display="flex" justifyContent="center">
            <Button sx={{color:"black"}} onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </Button>
            {[...Array(paginateData.pageCount)].map((_, index) => (
              <Button
              sx={{
                padding: "2px",
                margin: "2px",
                color: "black",
                borderColor:"black", // Set text color to orange
                bgcolor: currentPage === index + 1 ? "#E1693B" : "transparent", // Set background color to orange for active page
                "&:hover": {
                  bgcolor: "#E1693B", // Change background color on hover
                  color: "white", // Change text color on hover
                },
              }}
                key={index + 1}
                onClick={() => paginate(index + 1)}
                variant={currentPage === index + 1 ? "contained" : "outlined"}
              >
                {index + 1}
              </Button>
            ))}
            <Button
            sx={{color:"black"}}
              onClick={nextPage}
              disabled={currentPage === paginateData.pageCount}
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Blogs;
