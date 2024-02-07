const data = {
  userName: "john",
  partnerName: "johny",
  userFather: [
    {
      name: "f",
      partner: "pf",
      userFather: [
        {
          name: "ff",
          partner: "pff",
          userFather: [
            {
              name: "fff",
              partner: "pfff",
              userFather: [
                {
                  name: "ffff",
                  partner: "pffff",
                  userFather: [],
                  userMother: [],
                },
              ],
              userMother: [
                {
                  name: "m",
                  partner: "pm",
                  userFather: [],
                  userMother: [],
                },
              ],
            },
          ],
          userMother: [
            {
              name: "m",
              partner: "pm",
              userFather: [],
              userMother: [],
            },
          ],
        },
      ],
      userMother: [
        {
          name: "m",
          partner: "pm",
          userFather: [
            {
              name: "m",
              partner: "pm",
              userFather: [],
              userMother: [],
            },
            {
              name: "m",
              partner: "pm",
              userFather: [],
              userMother: [],
            }
          ],
          userMother: [
            {
              name: "m",
              partner: "pm",
              userFather: [],
              userMother: [],
            },
            {
              name: "m",
              partner: "pm",
              userFather: [],
              userMother: [],
            }
          ],
        },
      ],
    },
  ],
  userMother: [
    {
      name:'',
      partner:'',
      userFather:[
        {
          name:'',
          partner:'',
          userFather:[
            {
              name:'',
              partner:'',
              userFather:[],
              userMother:[],
            }
          ],
          userMother:[
            {
              name:'',
              partner:'',
              userFather:[],
              userMother:[],
            }
          ],
        }
      ],
      userMother:[],
    }
  ],
  partnerFather: {
    name: "def9",
    partner: "ghi1",
    father: {
      name: "ghi2",
      partner: "ghi2",
      father: {},
      mother: {},
    },
    mother: {
      name: "ghi3",
      partner: "ghi4",
      father: {},
      mother: {},
    },
  },
  partnerMother: {
    name: "ghi5",
    partner: "ghi6",
    father: {
      name: "ghi7",
      partner: "ghi8",
      father: {},
      mother: {},
    },
    mother: {
      name: "ghi9",
      partner: "jkl1",
      father: {},
      mother: {},
    },
  },
  userSiblings: [
    {
      name: "jkl2",
      partner: "jkl3",
    },
    {
      name: "jkl4",
      partner: "jkl5",
    },
  ],
  childrens: [
    {
      name: "child1",
      partner: "jkl7",
      childrens: [
        {
          name: "child1child1",
          partner: "jkl9",
          childrens: [
            {
              name: "child1child1child",
              partner: "mno2",
              childrens: [
                {
                  name: "child1child1childchild",
                  partner: "mno2",
                  childrens: [],
                },
              ],
            },
          ],
        }
      ],
    },
  ],
};

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { zoom } from "d3";
import Tree from "react-d3-tree";

const FamilyTree = () => {
  const svgRef = useRef();
  useEffect(() => {
    if (!data) {
      return;
    } else {
      d3.select(svgRef.current).selectAll("*").remove();
      drawTree();
    }
  }, []);

  const drawTree = () => {
    const tree = d3
      .tree()
      .separation((a, b) => {
        return 1;
      })
      .size([1500, 1500]);

    const svg = d3
      .select(svgRef.current)
      .attr("width", 1800)
      .attr("height", 1800);

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

    const g = svg.append("g").attr("transform", `translate(${10},${10})`);

    //elbows

    const userFatherNodes = d3.hierarchy(data, (d) => d.userFather);
    const partnerFatherNodes = d3.hierarchy(data, (d) => d.partnerFather);
    const userMotherNodes = d3.hierarchy(data, (d) => d.userMother);
    const partnerMotherNodes = d3.hierarchy(data, (d) => d.partnerMother);
    const childrenNodes = d3.hierarchy(data, (d) => d.childrens);

    const treeNodes = tree(userFatherNodes);
    const descendants = treeNodes.descendants().slice(1);
    console.log("111nodes1", descendants);

    const treeNodes2 = tree(childrenNodes);
    const descendants2 = treeNodes2.descendants().slice(1);
    console.log("111nodes2", descendants2);

  };
};

export default FamilyTree;
