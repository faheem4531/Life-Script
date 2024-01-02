//
// .title { font-size: larger; text-align: center; }
// .name { font-weight: bold; }
// .about { fill: #777; font-size: smaller; }
// .lifespan { fill: #2c5; }
// .link { fill: none; stroke: #000; shape-rendering: crispEdges; }
// .node { fill: blue; }
// .nameRect { fill: #ddd; stroke: #999; }
//
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { zoom } from "d3";
import styles from "./FamilyTree.module.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ReactDOMServer from "react-dom/server";
const FamilyTree = ({ familyTreeData }) => {
  const svgRef = useRef();

  function handleAvatarClick() {
    const fileInput = this.querySelector("input[type='file']");
    fileInput.click();

    fileInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {

            };
            reader.readAsDataURL(file);
        }
    });
}

  useEffect(() => {
    if (!familyTreeData) {
      console.error("Family tree data is missing.");
      return;
    }

    const margin = { top: 10, right: 640, bottom: 10, left: 10 };
    const fullWidth = 2000;
    const fullHeight = 1100;
    const width = fullWidth - margin.left - margin.right;
    const height = fullHeight - margin.top - margin.bottom;

    const tree = d3
      .tree()
      .separation((a, b) => {
        console.log("Node a:", a);
        console.log("Node b:", b);

        // Your existing logic for separation
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
      const yOffset = d.target.data.spouse ? -55 : 0;
      return `M${d.source.y + 110},${d.source.x}H${d.target.y}V${
        d.target.x + yOffset
      }H${d.target.y + 10}`;
    };

    const nodes = d3.hierarchy(familyTreeData, (d) => d.childrens);

    const treeNodes = tree(nodes);
    console.log("nodes", treeNodes.links());

    const link = g
      .selectAll(".link")
      .data(treeNodes.links())
      .enter()
      .append("path")
      .attr("class", `${styles.link}`)
      .attr("d", elbow);

    const node = g
      .selectAll(".node")
      .data(treeNodes.descendants())
      .enter()
      .append("g")
      .attr("class", `${styles.node}`)
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

      node.each(function (d) {
        // Add a condition to check if the rectangle should be rendered
        if (d.data.spouse) {
            // Render the first rectangle (for the person)
            const personNode = d3.select(this);
    
            personNode.append("rect")
                .attr("class", `${styles.nameRect}`)
                .attr("x", 10)
                .attr("y", -105)
                .attr("width", 200)
                .attr("height", 100)
                .on("click", () => console.log("Clicked on:", d.data.name));
    
            // Render the text for the person
            personNode.append('text')
                .attr('class', `${styles.name}`)
                .attr('x', 16)
                .attr('y', -85)
                .text((d) => d.data.name || '');
    
            // Render the second rectangle (for the spouse)
            personNode.append("rect")
                .attr("class", `${styles.spouseRect}`)
                .attr("x", 10)
                .attr("y", 5)
                .attr("width", 200)
                .attr("height", 100)
                .on("click", () => console.log("Clicked on:", d.data.spouse));
    
            // Render the text for the spouse
            personNode.append('text')
                .attr('class', `${styles.name}`)
                .attr('x', 70)
                .attr('y', 25)
                .text((d) => d.data.spouse || '');

            personNode.append("image")
            .attr(
                "xlink:href",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrV7sCjuWDaPNa7VE7LStsRFLL6T4dZDChza0HbaEQHsqXwL4hq-ceFBdvKScb_f31gA&usqp=CAU"
            ) // Use a placeholder if no avatar is set
            .attr("width", 50)
            .attr("height", 50)
            .attr("x", 20) // Center the image horizontally
            .attr("y", -90); // Center the image vertically
    
            personNode.append("foreignObject")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", 20) // Adjust the spacing between icons
            .attr("y", -40)
            .on("click", () => console.log("Clicked on:", d.data.spouse))
            .html(() => ReactDOMServer.renderToString(<DeleteIcon style={{ fill: "black", cursor: "pointer" }} />));

            personNode.append("foreignObject")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", 40) // Adjust the spacing between icons
            .attr("y", -40)
            .on("click", () => console.log("Clicked on:", d.data.spouse))
            .html(() => ReactDOMServer.renderToString(<AddIcon style={{ fill: "black", cursor: "pointer" }} />));

            personNode.append("foreignObject")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", 60) // Adjust the spacing between icons
            .attr("y", -40)
            .on("click", () => console.log("Clicked on:", d.data.spouse))
            .html(() => ReactDOMServer.renderToString(<EditIcon style={{ fill: "black", cursor: "pointer" }} />));
            // Calculate the starting point (bottom center) of the line
            const personBottomCenterX = 10 + 200 / 2;
            const personBottomCenterY = -105 + 100;
    
            // Calculate the ending point (top center) of the line
            const spouseTopCenterX = 10 + 200 / 2;
            const spouseTopCenterY = 5;
    
            // Connect the two rectangles with a line
            personNode.append("line")
                .attr("class", `${styles.connectionLine}`)
                .attr("x1", personBottomCenterX)
                .attr("y1", personBottomCenterY)
                .attr("x2", spouseTopCenterX)
                .attr("y2", spouseTopCenterY)
                .style("stroke", "black")
                .style("stroke-width", 2);
    
        } else {
            // Render a single rectangle (for the person)
            const personNode = d3.select(this);
    
            personNode.append("rect")
                .attr("class", `${styles.nameRect}`)
                .attr("x", 10)
                .attr("y", -50)
                .attr("width", 200)
                .attr("height", 100)
                .on("click", () => console.log("Clicked on:", d.data.name));
    
            // Render the text for the person
            personNode.append('text')
                .attr('class', `${styles.name}`)
                .attr('x', 16)
                .attr('y', -30)
                .text((d) => d.data.name || '');

                personNode.append("image")
                .attr(
                    "xlink:href",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrV7sCjuWDaPNa7VE7LStsRFLL6T4dZDChza0HbaEQHsqXwL4hq-ceFBdvKScb_f31gA&usqp=CAU"
                ) // Use a placeholder if no avatar is set
                .attr("width", 50)
                .attr("height", 50)
                .attr("x", 20) // Center the image horizontally
                .attr("y", -30); // Center the image vertically
        
                personNode.append("foreignObject")
                .attr("width", 15)
                .attr("height", 15)
                .attr("x", 20) // Adjust the spacing between icons
                .attr("y", 30)
                .on("click", () => console.log("Clicked on:", d.data.spouse))
                .html(() => ReactDOMServer.renderToString(<DeleteIcon style={{ fill: "black", cursor: "pointer" }} />));
    
                personNode.append("foreignObject")
                .attr("width", 15)
                .attr("height", 15)
                .attr("x", 40) // Adjust the spacing between icons
                .attr("y", 30)
                .on("click", () => console.log("Clicked on:", d.data.spouse))
                .html(() => ReactDOMServer.renderToString(<AddIcon style={{ fill: "black", cursor: "pointer" }} />));
    
                personNode.append("foreignObject")
                .attr("width", 15)
                .attr("height", 15)
                .attr("x", 60) // Adjust the spacing between icons
                .attr("y", 30)
                .on("click", () => console.log("Clicked on:", d.data.spouse))
                .html(() => ReactDOMServer.renderToString(<EditIcon style={{ fill: "black", cursor: "pointer" }} />));
        }
    });
      
    
  }, [familyTreeData]);

  return <svg ref={svgRef}></svg>;
};

export default FamilyTree;

/*

      node.each(function (d) {
        const personNode = d3.select(this);
        const iconSize = 20;
        const squareSize = 200; // Adjust the size of the square container
    
        // Create a group to wrap the square container
        const squareGroup = personNode
            .append("g")
            .attr("transform", "translate(10, -100)"); // Adjust the position of the group
    
        // Create a square container
        squareGroup
            .append("rect")
            .attr("width", squareSize)
            .attr("height", squareSize)
            .style("color", "blue"); // Adjust the fill color as needed
    
        // Create an image element for the avatar inside the square
        squareGroup
            .append("image")
            .attr(
                "xlink:href",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrV7sCjuWDaPNa7VE7LStsRFLL6T4dZDChza0HbaEQHsqXwL4hq-ceFBdvKScb_f31gA&usqp=CAU"
            ) // Use a placeholder if no avatar is set
            .attr("width", 50)
            .attr("height", 50)
            .attr("x", 10) // Center the image horizontally
            .attr("y", -90); // Center the image vertically
    
        // Edit icon
        squareGroup
            .append("foreignObject")
            .attr("width", iconSize)
            .attr("height", iconSize)
            .attr("x", squareSize + 10) // Adjust the spacing between icons
            .style("color", "black")
            .html(() => ReactDOMServer.renderToString(<EditIcon />));
    
        // Add icon
        squareGroup
            .append("foreignObject")
            .attr("width", iconSize)
            .attr("height", iconSize)
            .attr("x", squareSize + 10 + iconSize + 5) // Adjust the spacing between icons
            .style("color", "black")
            .html(() => ReactDOMServer.renderToString(<AddIcon />));
    
        // Delete icon
        squareGroup
            .append("foreignObject")
            .attr("width", iconSize)
            .attr("height", iconSize)
            .attr("x", squareSize + 10 + (iconSize + 5) * 2) // Adjust the spacing between icons
            .style("color", "black")
            .html(() => ReactDOMServer.renderToString(<DeleteIcon />));
    });
*/
