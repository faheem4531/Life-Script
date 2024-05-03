// pages/index.js
import FamilyTreeLayout from "@/components/Layout/FamilyTreeLayout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import { getTreeData, selectTreeData } from "@/store/slices/chatSlice";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FamilyTree from "./tree";
import Layout from '@/components/Layout/Layout';
import AddChapterName from '@/components/dashboardComponent/AddChapterName';
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import FamilyTreeImage from "@/_assets/svg/family-tree-header.svg";

const Home = () => {
  const dispatch: any = useDispatch();
  const treeData = useSelector(selectTreeData);
  const [familyTreeData, setFamilyTreeData] = useState({});

  useEffect(() => {
    dispatch(getTreeData())
  }, []);

  useEffect(() => {
    setFamilyTreeData(treeData);
  }, [treeData]);

  const familyTreeData3 = {
    name: "",
    userId: "65966deb60c31331dc4e85b5",
    spouseName: "",
    died: "",
    spouseDied: "",
    born: "",
    gender: "",
    root: "root",
    location: "",
    image: "",
    spouseImage: "",
    spouseBorn: "",
    spouseLocation: "",
    spouseGender: "",
    _id: "659a939a9bab2758d1864d82",
    childrens: [
      {
        died: "2023-12-31T19:00:00.000Z",
        spouseDie: "2023-12-31T19:00:00.000Z",
        name: "ANGELANGELANGELANGEL",
        born: "1997-01-04T08:52:14.601Z",
        location: "qasoori",
        image:
          "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
        spouseImage:
          "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
        spouseName: "lilly",
        spouseBorn: "1997-01-04T08:52:14.601Z",
        spouseDied: "1997-01-04T08:52:14.601Z",
        spouseLocation: "qasoor",
        spouseGender: "Female",
        gender: "Male",
        childrens: [
          {
            died: "2023-12-31T19:00:00.000Z",
            spouseDie: "2023-12-31T19:00:00.000Z",
            name: "ANGELANGELANGELANGEL",
            born: "1997-01-04T08:52:14.601Z",
            location: "qasoori",
            image:
              "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
            spouseImage:
              "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
            spouseName: "lilly",
            spouseBorn: "1997-01-04T08:52:14.601Z",
            spouseDied: "1997-01-04T08:52:14.601Z",
            spouseLocation: "qasoor",
            spouseGender: "Female",
            gender: "Male",
            childrens: [],
            _id: "659a939a9bab2758d1864d85",
          },
        ],
        parents: [
          {
            fatherName: "abc",
            motherName: "xyz",
          }
        ],
        _id: "659a939a9bab2758d1864d85",
      },
    ],
  };

  return (
    <Layout>

      <SelectBookCoverHeader img={FamilyTreeImage} discription="Family Tree" />
      <Box
        sx={{
          p: { sm: "0", xs: "10px" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: "1",
          }}
        >
          {/* <SubscriptionHeader title="Family Tree" description="" /> */}
        </Box>
        <FamilyTree familyTreeData={familyTreeData} />
      </Box>
    </Layout>
  );
};

export default Home;
