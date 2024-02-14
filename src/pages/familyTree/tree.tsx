import FamilyTreeDataModal from "@/components/modal/FamilyTreeDataModal";
import SelectRelationModal from "@/components/modal/SelectRelationModal";
import { updatePartner, addChildren, addParent } from "@/store/slices/chatSlice";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import * as d3 from "d3";
import { zoom } from "d3";
import { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { useDispatch } from "react-redux";
import styles from "./FamilyTree.module.css";

const FamilyTree = ({ familyTreeData }) => {
  const svgRef = useRef();
    const dispatch: any = useDispatch();
  const [familyModal, setFamilyModal] = useState(false);
  const [familyRelationModal, setFamilyRelationModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [updatedNode, setUpdatedNode] = useState({});
  const [nodeData, setNodeData] = useState(null);
  const [selectedRelation, setSelectedRelation] = useState();
  const [relations, setRelations] = useState([
    "Sibling",
    "Child"
  ]);
  const [personData, setPersonData] = useState({});
  const profileIcon =
    "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704374174/thelifescript/b7wxd4jnck7pbmzz4vdu.jpg";

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
    } else if(relationType === "Sibling"){
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
    setUpdatedNode({});
    setRelations([
      "Sibling",
      "Child"
    ])
    if (iconType === "editspouse") {
      handleEditSpouse(name, d);
    } else if (iconType === "add") {
      handleAdd(name, d);
    } else if (iconType === "edit") {
      handleEdit(name, d);
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
    setUpdatedNode({ isSpouse: false, ...d?.data });
    setSelectedNode(d);
    setFamilyModal(true);
  };

  const handleAdd = (name, d) => {
    setUpdatedNode({});
    setNodeData(null);
    const isSpouse = d?.data?.name ? false : true;
    setSelectedNode({ isSpouse: isSpouse, ...d });
    !d?.parent?.data?.name && !d?.parent?.data?.spouseName && setRelations((prev) => [...prev, "Parent"]);
    !d?.data?.spouseName && setRelations((prev) => [...prev, "Partner"]);
    setFamilyRelationModal(true);
  };

  useEffect(() => {
    if (!familyTreeData) {
      return;
    } else {
      d3.select(svgRef.current).selectAll("*").remove();
      drawTree();
    }
  }, [familyTreeData]);

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
    const renderRect = (x, y, height, className, isSpouse) => {
      personNode
        .append("rect")
        .attr("class", className)
        .attr("x", x)
        .attr("rx", 10)
        .attr("y", y)
        .attr("width", 200)
        .attr("height", height)
        .on("click", () =>{
          console.log("Clicked on rect:", d.data?.image, "33rr", className);
        });
    };

    const renderText = (x, y, text, className) => {
      personNode
        .append("text")
        .attr("class", className)
        .attr("x", x)
        .attr("y", y)
        .text(text);
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
        .attr("class", `${styles.circularImage}`);
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
        .style("stroke", "black")
        .style("stroke-width", 2);
    };

    if (d.data.spouseName) {
      renderRect(10, -105, 100, `${styles.nameRect}`, true);
      renderImage(14, -100, d.data.image || profileIcon);
      renderText(76, -75, d.data.name || "", `${styles.name}`);
      //age
      const born = d.data.born?.slice(0, 4);
      const died = d.data.died?.slice(0, 4);
      const age =
        born && died ? born + " - " + died : born ? "b. " + born : died ? "d. " + died : "b. Not Known" ;
      renderText(76, -50, age || "", `${styles.dateLocation}`);
      renderText(76, -40, d.data.location || "", `${styles.dateLocation}`);
      //for spouse
      renderRect(10, 5, 100, `${styles.spouseRect}`, true);
      renderImage(14, 10, d.data.spouseImage || profileIcon);
      renderText(76, 35, d.data.spouseName || "", `${styles.name}`);
      const spouseBorn = d.data.spouseBorn?.slice(0, 4);
      const spouseDied = d.data.spouseDied?.slice(0, 4);
      let spouseAge =
        spouseBorn && spouseDied
          ? spouseBorn + " - " + spouseDied
          : spouseBorn
          ? "b. " + spouseBorn
          : spouseDied ? "d. " + spouseDied
          : "b. Not Known";
      renderText(76, 60, spouseAge || "", `${styles.dateLocation}`);
      renderText(76, 70, d.data.spouseLocation, `${styles.dateLocation}`);
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
        born && died ? born + " - " + died : born ? "b. " + born : died ? "d. " + died : "b. Not Known";
      renderRect(10, -50, 100, `${styles.nameRect}`, true);
      renderImage(14, -45, d.data.image || profileIcon);
      renderText(76, -20, d.data.name || "", `${styles.name}`);
      renderText(76, 5, age || "", `${styles.dateLocation}`);
      renderText(76, 15, d.data.location || "", `${styles.dateLocation}`);

      const iconPositions = [
        {
          x: 20,
          y: 20,
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
      <Box
        sx={{
          position: "absolute",
          top: "0%",
          left: "0%",
          // background: "red",
          transform: {
            md: "translate(-0%, -25%)",
            sm: "translate(-5%, -25%)",
            xs: "translate(-8%, -30%)",
          },
        }}
      >
        <svg
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

      <FamilyTreeDataModal
        nodeData={updatedNode}
        familyModal={familyModal}
        setFamilyModal={setFamilyModal}
        selectedRelation={selectedRelation}
        onSubmit={handleAddedPerson}
      />
    </>
  );
};

export default FamilyTree;
