import FamilyTreeDataModal from "@/components/modal/FamilyTreeDataModal";
import SelectRelationModal from "@/components/modal/SelectRelationModal";
import {
  updatePartner,
  addChildren,
  addParent,
  uploadImage,
  uploadImageFamilyTree,
} from "@/store/slices/chatSlice";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Backdrop, Box, Button, IconButton } from "@mui/material";
import * as d3 from "d3";
import { zoom } from "d3";
import { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { useDispatch } from "react-redux";
import styles from "./FamilyTree.module.css";
import { saveSvgAsPng, svgAsPngUri, svgAsDataUri } from "save-svg-as-png";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import LogoSvg from "@/_assets/svg/logo.svg";
import FamilyTreeSVG from "@/_assets/svg/family-tree-svg.svg";
import { toast } from "react-toastify";

import CircularProgress from "@mui/material/CircularProgress";
import FamilyTreeAddModal from "@/components/modal/FamilyTreeAddModal";

const FamilyTree = ({ familyTreeData }) => {
  const svgRef = useRef();
  const dispatch: any = useDispatch();
  const [familyModal, setFamilyModal] = useState(false);
  const [familyEditModal, setFamilyEditModal] = useState(false);
  const [familyRelationModal, setFamilyRelationModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updatedNode, setUpdatedNode] = useState({});
  const [nodeData, setNodeData] = useState(null);
  const [selectedRelation, setSelectedRelation] = useState(undefined);
  const [relations, setRelations] = useState(["Sibling", "Child"]);
  const [personData, setPersonData] = useState({});
  const [dd, setDd] = useState({});

  // const profileIcon =
  //   "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704374174/thelifescript/b7wxd4jnck7pbmzz4vdu.jpg";

  const Male = "./familyTreeRelations/male.svg";
  const Female = "./familyTreeRelations/female.svg";
  // console.log(relations, "family data familyTreeData");

  const handleAddedPerson = (data) => {
    setFamilyModal(false);
    setSelectedNode(null);
    setUpdatedNode({});
    const { relationType, ...newData } = data;

    if (relationType === "Parent") {
      addParents(newData);
    } else if (relationType === "Child") {
      addChild(newData);
    } else if (relationType === "Partner") {
      addPartner(newData);
    } else if (relationType === "Sibling") {
      addSibling(newData);
    } else {
      addPartner(newData);
    }
  };

  const addPartner = (data) => {
    let partnerData;
    if (data?.isSpouse === false) {
      partnerData = {
        nodeId: selectedNode?.data?._id,
        name: data.name,
        born: data.born,
        died: data.died,
        gender: data.gender,
        image: data.image,
        location: data.location,
      };
    } else {
      partnerData = {
        nodeId: selectedNode?.data?._id,
        spouseName: data.name,
        spouseBorn: data.born,
        spouseDied: data.died,
        spouseGender: data.gender,
        spouseImage: data.image,
        spouseLocation: data.location,
      };
    }

    dispatch(updatePartner(partnerData))
      .unwrap()
      .then(() => {
        setUpdatedNode({});
        setNodeData(null);
      });
  };

  const addParents = (data) => {
    let parentData = {
      name: data.name,
      born: data.born,
      died: data.died,
      gender: data.gender,
      image: data.image,
      location: data.location,
    };

    dispatch(addParent(parentData))
      .unwrap()
      .then(() => {
        setUpdatedNode({});
        setNodeData(null);
      });
  };

  const addChild = (data) => {
    let childData = {};
    if (data?.isSpouse === true) {
      childData = {
        nodeId: selectedNode?.data?._id,
        spouseName: data.name,
        spouseBorn: data.born,
        spouseDied: data.died,
        spouseGender: data.gender,
        spouseImage: data.image,
        spouseLocation: data.location,
      };
    } else {
      childData = {
        nodeId: selectedNode?.data?._id,
        name: data.name,
        born: data.born,
        died: data.died,
        gender: data.gender,
        image: data.image,
        location: data.location,
      };
    }

    dispatch(addChildren(childData))
      .unwrap()
      .then(() => {
        setUpdatedNode({});
        setNodeData(null);
      });
  };

  const addSibling = (data) => {
    let childData = {
      nodeId: selectedNode?.parent?.data?._id,
      name: data.name,
      born: data.born,
      died: data.died,
      gender: data.gender,
      image: data.image,
      location: data.location,
    };

    dispatch(addChildren(childData))
      .unwrap()
      .then(() => {
        setUpdatedNode({});
        setNodeData(null);
      });
  };

  const handleIconClick = (name, iconType, d) => {
    console.log(d, "logggggg dataa");

    setUpdatedNode({});
    setFamilyEditModal(false);
    setRelations(["Sibling", "Child"]);
    if (iconType === "editspouse") {
      console.log("editspouse");

      handleEditSpouse(name, d);
    } else if (iconType === "add") {
      console.log("add");

      handleAdd(name, d);
    } else if (iconType === "edit") {
      handleEdit(name, d);
      console.log("edit");
    }
  };

  const handleEditSpouse = (name, d) => {
    // Implement your logic for handling edit
    setUpdatedNode({ isSpouse: true, ...d?.data });
    setSelectedNode(d);
    setFamilyModal(true);
  };

  const handleEdit = (name, d) => {
    // Implement your logic for handling edit
    setSelectedRelation(undefined);
    setUpdatedNode({ isSpouse: false, ...d?.data });

    setSelectedNode(d);
    setFamilyModal(true);
  };

  const handleAdd = (name, d) => {
    setUpdatedNode({});
    setNodeData(null);
    const isSpouse = d?.data?.name ? false : true;
    setSelectedNode({ isSpouse: isSpouse, ...d });
    !d?.parent?.data?.name &&
      !d?.parent?.data?.spouseName &&
      setRelations((prev) => [...prev, "Parent"]);
    !d?.data?.spouseName && setRelations((prev) => [...prev, "Partner"]);
    setFamilyRelationModal(true);
  };

  useEffect(() => {
    if (!familyTreeData) {
      return;
    } else {
      d3.select(svgRef.current).selectAll("*").remove();
      d3.select("#download").on("click", function () {
        setLoading(true);

        const { src, height } = LogoSvg;
        const { src: srcFamily, width: widthFamily } = FamilyTreeSVG;
        const mainSvg = d3.select(svgRef.current);
        const familyTreeGroup = mainSvg
          .append("g")
          .attr("id", "familyTreeGroup")
          .attr("transform", "scale(2)");
        const familyTreeGroupFamily = mainSvg
          .append("g")
          .attr("id", "familyTreeGroupFamily")
          .attr("transform", `translate(0, ${60}) scale(0.2)`);

        d3.xml(src).then((data) => {
          const externalSvgContent = d3.select(data).select("svg");

          familyTreeGroup.html(externalSvgContent.html());

          d3.xml(srcFamily).then((dataFamily) => {
            const externalSvgContentFamily = d3
              .select(dataFamily)
              .select("svg");
            familyTreeGroupFamily.html(externalSvgContentFamily.html());
            const name =
              typeof window !== "undefined"
                ? localStorage.getItem("username")
                : null;
            // Add a separation between the two external SVGs
            const separation = 20;
            const newY = height + 100 + separation;

            // Append the second external SVG below the first one
            familyTreeGroupFamily.append("g").attr("id", "secondExternalSvg");

            // Add dynamic text below the second logo
            familyTreeGroupFamily
              .append("text")
              .attr("x", widthFamily + 180) // Adjust the x-coordinate as needed
              .attr("y", newY + height) // Adjust the y-coordinate as needed
              .attr("text-anchor", "start") // Adjust text-anchor as needed (start, middle, end)
              .attr("fill", "black") // Adjust the text color
              .style("font-size", "140px")
              .style("font-weight", "140px")
              .style("color", "#1D2D20")
              .text(`${name} Family Tree`);

            saveSvgAsPng(mainSvg.node(), "familytree.png", {
              scale: 1,
              backgroundColor: "#FFFFFF",
            }).then((data) => {
              console.log("data", data);
              // uploadImageonCloud(data);
              setLoading(false);
              familyTreeGroup.remove();
              familyTreeGroupFamily.remove();
            });

            svgAsPngUri(mainSvg.node(), "familytree.png", {
              scale: 1,
              backgroundColor: "#FFFFFF",
              // height: "auto",
              // width: "100%",
            }).then((uri) => {
              console.log("data", uri);

              fetch(uri)
                .then((response) => response.blob())
                .then((imgBlob) => {
                  console.log("imgBlob", imgBlob);
                  const formData = new FormData();
                  setLoading(false);
                  formData.append("image", imgBlob);
                  uploadImageonCloud(formData);
                  familyTreeGroup.remove();
                  familyTreeGroupFamily.remove();
                });
            });
          });
        });
      });
      drawTree();
    }
  }, [familyTreeData]);

  const uploadImageonCloud = (formData) => {
    console.log("formData", formData);
    dispatch(uploadImageFamilyTree(formData))
      .unwrap()
      .then((res) => {
        toast.success("image uploaded successfully");
        console.log("resssssssss", res);
      })
      .catch(() => toast.error("Failed to upload image"));
  };

  const drawTree = () => {
    const totalNodes = d3.hierarchy(familyTreeData, (d) => d.childrens);
    const treeHeight = totalNodes?.height;
    const rightMargin = 2400 - (treeHeight - 1) * 200;
    const margin = { top: 10, right: rightMargin, bottom: 10, left: 10 };
    const fullWidth = 3000;
    const fullHeight = 1650;
    const width = fullWidth - margin.left - margin.right;
    const height = fullHeight - margin.top - margin.bottom;

    const tree = d3
      .tree()
      .separation((a, b) => {
        return a.children && a.children === b.children ? 1 : 0.5;
      })
      .size([height, width]);

    const svg = d3
      .select(svgRef.current)
      .attr("width", fullWidth)
      .attr("height", fullHeight);

    const zoomBehavior = zoom()
      .scaleExtent([0.1, 4]) // Set zoom limits
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoomBehavior);

    svg.append("style").text(`
      body { margin:0;position:fixed;top:0;right:0;bottom:0;left:0; }
      text { font-family: "Helvetica Neue", Helvetica, sans-serif; color: white !important }
    `);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const elbow = (d, i) => {
      const yOffset = d.target.data.spouseName ? -55 : 0;
      return `M${d.source.y + 110},${d.source.x}H${d.target.y}V${
        d.target.x + yOffset
      }H${d.target.y + 10}`;
    };

    const nodes = d3.hierarchy(familyTreeData, (d) => d.childrens);

    const treeNodes = tree(nodes);
    const descendants = treeNodes.descendants().slice(1);
    const links = treeNodes.links().filter((link) => link.source.depth > 0);

    const link = g
      .selectAll(".link")
      .data(links) //treeNodes.links()
      .enter()
      .append("path")
      .attr("class", `${styles.link}`)
      .attr("d", elbow);

    const node = g
      .selectAll(".node")
      .data(descendants) //treeNodes.descendants()
      .enter()
      .append("g")
      .attr("class", `${styles.node}`)
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    node.each(function (d) {
      renderNode(d3.select(this), d);
    });
  };

  const renderNode = (personNode, d) => {
    const handleNodeClick = () => {
      setDd(d);
      setFamilyEditModal(true);

      console.log("Node clicked:", d.data);
      // Add your custom logic here
    };

    const renderRect = (x, y, height, className, isSpouse) => {
      personNode
        .append("rect")
        .attr("class", className)
        .attr("x", x)
        .attr("rx", 10)
        .attr("y", y)
        .attr("width", 200)
        .attr("height", height)
        // .on("click", () => {
        //   console.log("Clicked on rect:", d.data?.image, "33rr", className);
        // });
        .on("click", handleNodeClick);
    };

    const renderText = (x, y, text, className) => {
      personNode
        .append("text")
        .attr("class", className)
        .attr("x", x)
        .attr("y", y)
        .text(text)
        .on("click", handleNodeClick);
    };

    const renderImage = (x, y, image) => {
      personNode
        .append("image")
        .attr("xlink:href", image)
        .attr("width", 60)
        .attr("height", 60)
        .attr("x", x)
        .attr("rx", 10)
        .attr("y", y)
        .attr("class", `${styles.circularImage}`)
        .on("click", handleNodeClick);
    };

    const renderForeignObject = (x, y, onClick, icon, d, iconType) => {
      personNode
        .append("foreignObject")
        .attr("width", 20)
        .attr("height", 20)
        .attr("x", x)
        .attr("y", y)
        .on("click", () => onClick(d, iconType)) // Pass the data and iconType to the onClick callback
        .html(() => ReactDOMServer.renderToString(icon));
    };

    const renderLine = (x1, y1, x2, y2) => {
      personNode
        .append("line")
        .attr("class", `${styles.connectionLine}`)
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .style("stroke", "#30422E")
        .style("stroke-width", 2);
    };

    if (d.data.spouseName) {
      // console.log(d.data, "dataaaaaa d.data.spouseName");

      renderRect(10, -5, 100, `${styles.nameRect}`, true);
      renderImage(
        20,
        -120,
        d.data.image || (d.data.gender == "Male" ? Male : Female)
      );
      renderText(30, -42, d.data.name || "", `${styles.name}`);
      //age
      const born = d.data.born?.slice(0, 4);
      const died = d.data.died?.slice(0, 4);
      const age =
        born && died
          ? born + " - " + died
          : born
          ? "b. " + born
          : died
          ? "d. " + died
          : "b. Not Known";
      renderText(30, -25, age || "", `${styles.dateLocation}`);
      // renderText(76, -40, d.data.location || "", `${styles.dateLocation}`);
      //for spouse
      renderRect(10, 5, 100, `${styles.spouseRect}`, true);
      renderImage(
        14,
        10,
        d.data.spouseImage || d.data.gender == "Male" ? Female : Male
      );
      renderText(23, 87, d.data.spouseName || "", `${styles.name}`);
      const spouseBorn = d.data.spouseBorn?.slice(0, 4);
      const spouseDied = d.data.spouseDied?.slice(0, 4);
      let spouseAge =
        spouseBorn && spouseDied
          ? spouseBorn + " - " + spouseDied
          : spouseBorn
          ? "b. " + spouseBorn
          : spouseDied
          ? "d. " + spouseDied
          : "b. Not Known";
      renderText(23, 106, spouseAge || "", `${styles.dateLocation}`);
      // renderText(76, 70, d.data.spouseLocation, `${styles.dateLocation}`);
      const iconPositions = [
        {
          x: 20,
          y: -35,
          icon: (
            <EditIcon
              style={{
                fill: "black",
                cursor: "pointer",
                maxWidth: 20,
                maxHeight: 20,
              }}
            />
          ),
          type: "edit",
        },
        {
          x: 50,
          y: -35,
          icon: (
            <AddIcon
              style={{
                fill: "black",
                cursor: "pointer",
                maxWidth: 20,
                maxHeight: 20,
              }}
            />
          ),
          type: "add",
        },
      ];

      iconPositions.forEach(({ x, y, icon, type }) => {
        renderForeignObject(
          x,
          y,
          (data, iconType) => handleIconClick(data.data.name, iconType, d),
          icon,
          d,
          type
        );
      });

      const iconPosition2 = [
        {
          x: 20,
          y: 75,
          icon: (
            <EditIcon
              style={{
                fill: "black",
                cursor: "pointer",
                maxWidth: 20,
                maxHeight: 20,
              }}
            />
          ),
          type: "editspouse",
        },
      ];

      iconPosition2.forEach(({ x, y, icon, type }) => {
        renderForeignObject(
          x,
          y,
          (data, iconType) =>
            handleIconClick(data.data.spouseName, iconType, d),
          icon,
          d,
          type
        );
      });

      const personBottomCenterX = 10 + 200 / 2;
      const personBottomCenterY = -105 + 100;
      const spouseTopCenterX = 10 + 200 / 2;
      const spouseTopCenterY = 5;

      renderLine(
        personBottomCenterX,
        personBottomCenterY,
        spouseTopCenterX,
        spouseTopCenterY
      );
    } else {
      const born = d.data.born?.slice(0, 4);
      const died = d.data.died?.slice(0, 4);
      const age =
        born && died
          ? born + " - " + died
          : born
          ? "b. " + born
          : died
          ? "d. " + died
          : "b. Not Known";
      renderRect(10, -50, 100, `${styles.nameRect}`, true);
      renderImage(
        14,
        -45,
        d.data.image || (d.data.gender == "Male" ? Male : Female)
      );
      renderText(20, 33, d.data.name || "", `${styles.name}`);
      renderText(20, 50, age || "", `${styles.dateLocation}`);
      // renderText(76, 15, d.data.location || "", `${styles.dateLocation}`);
      const iconPositions = [
        {
          x: 20,
          y: 25,
          icon: (
            <EditIcon
              style={{
                fill: "black",
                cursor: "pointer",
                maxWidth: 20,
                maxHeight: 20,
              }}
            />
          ),
          type: "edit",
        },
        {
          x: 50,
          y: 20,
          icon: (
            <AddIcon
              style={{
                fill: "black",
                cursor: "pointer",
                maxWidth: 25,
                maxHeight: 20,
              }}
            />
          ),
          type: "add",
        },
      ];

      iconPositions.forEach(({ x, y, icon, type }) => {
        renderForeignObject(
          x,
          y,
          (data, iconType) => handleIconClick(data.data.name, iconType, data),
          icon,
          d,
          type
        );
      });
    }
  };

  return (
    <>
      <Box>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "0%",
          left: "0%",
          transform: {
            md: "translate(-0%, -25%)",
            sm: "translate(-5%, -25%)",
            xs: "translate(-8%, -30%)",
          },
        }}
      >
        <svg
          id="familyTree"
          style={{ position: "absolute", top: "20px", left: "20px" }}
          ref={svgRef}
          // style={{ maxWidth: "1000px", maxHeight: "600px" }}
        ></svg>
      </Box>

      <SelectRelationModal
        relations={relations}
        familyRelationModal={familyRelationModal}
        setFamilyRelationModal={setFamilyRelationModal}
        setFamilyModal={setFamilyModal}
        onClick={(item) => {
          setFamilyRelationModal(false);

          setSelectedRelation(item);
          if (item === "Partner") {
            setUpdatedNode({ isSpouse: true });
          }
        }}
      />
      <IconButton id="download" aria-label="download">
        <CloudDownloadIcon fontSize="large" />
      </IconButton>
      {/* <Button id="download">Download as PNG</Button> */}

      <FamilyTreeDataModal
        nodeData={updatedNode}
        familyModal={familyModal}
        setFamilyModal={setFamilyModal}
        selectedRelation={selectedRelation}
        onSubmit={handleAddedPerson}
      />

      <FamilyTreeAddModal
        familyEditModal={familyEditModal}
        setFamilyEditModal={setFamilyEditModal}
        nodeData={dd}
        onClick={handleIconClick}
      />
    </>
  );
};

export default FamilyTree;
