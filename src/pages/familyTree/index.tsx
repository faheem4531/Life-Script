// pages/index.js
import FamilyTree from "./tree";
import { useDispatch } from "react-redux";
import { getTreeData, selectTreeData } from "@/store/slices/chatSlice";
import FamilyTreeDataModal from "@/components/modal/FamilyTreeDataModal";
import SelectRelationModal from "@/components/modal/SelectRelationModal";
import { useSelector } from "react-redux";

const Home = () => {
  // Replace this with your actual family tree data
  const familyTreeData = {
    id: 1,
    name: "AAAA AAAA",
    born: "1788",
    died: "3465",
    location: "Petersburg, VA",
    spouse: "heheh",
    spouseBorn: "2445",
    spouseDeath: " 6543",
    spouseLocation: "Lahore",
    childrens: [
      {
        id: 1,
        name: "ANGELANGELANGELANGEL",
        born: "1788",
        location: "Petersburg, VA",
        childrens: [
          {
            id: 1,
            name: "ANGELANGELANGELANGEL",
            died: "3465",
            image:
              "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704382144/thelifescript/zmo1ibkdk713i6uatehk.jpg",
            location: "Ireland/Petersburg, VA",
            spouse: "ANGELANGELANGELANGEL",
            spouseBorn: "2445",
            spouseDeath: " 6543",
            spouseLocation: "Lahore",
            childrens: [
              {
                id: 1,
                name: "DDDD DDD",
                born: "1788",
                died: "3465",
                location: "Ireland/Petersburg, VA",
                childrens: [
                  {
                    id: 1,
                    name: "xx xx",
                    born: "1788",
                    died: "3465",
                    location: "Ireland/Petersburg, VA",
                    spouse: "Lilly2",
                    spouseBorn: "2445",
                    spouseDeath: " 6543",
                    spouseLocation: "Lahore",
                    childrens: [
                      {
                        id: 1,
                        name: "yyyyy",
                        born: "1788",
                        died: "3465",
                        location: "Ireland/Petersburg, VA",
                        childrens: [
                          {
                            id: 1,
                            name: "zzzz",
                            born: "1788",
                            died: "3465",
                            location: "Ireland/Petersburg, VA",
                            spouse: "Lilly3",
                            spouseBorn: "2445",
                            spouseDeath: " 6543",
                            spouseLocation: "Lahore",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: 1,
                name: "dddd ddd",
                born: "1788",
                died: "3465",
                location: "Petersburg, VA",
              },
            ],
          },
          {
            id: 1,
            name: "M. Ali Haseeb Khwaja",
            born: "1788",
            died: "3465",
            location: "Ireland/Petersburg, VA",
          },
          {
            id: 1,
            name: "DDDD  ddd DDD",
            born: "1788",
            died: "3465",
            location: "Ireland/Petersburg, VA",
            spouse: "lilly4",
            spouseBorn: "2445",
            spouseDeath: " 6543",
            spouseLocation: "Lahore",
            childrens: [
              {
                id: 1,
                name: "222 2222",
                born: "1788",
                died: "3465",
                location: "Ireland/Petersburg, VA",
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "bbbb bbb",
        born: "1788",
        died: "3465",
        location: "Bruns/Petersburg, VA",
        childrens: [
          {
            id: 1,
            name: "EEEEE EE",
            born: "1788",
            died: "3465",
            location: "Montgomery, NC",
            childrens: [
              {
                id: 1,
                name: "ttttt tt",
                born: "1788",
                died: "3465",
                location: "Ireland/Petersburg, VA",
              },
            ],
          },
          {
            id: 1,
            name: "eeeee ee",
            born: "1788",
            died: "3465",
            location: "Montgomery, NC",
            childrens: [
              {
                id: 1,
                name: "ANGELANGELANGELANGEL",
                born: "1788",
                died: "3465",
                location: "Ireland/Petersburg, VA",
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div>
      <FamilyTree familyTreeData={familyTreeData} />
    </div>
  );
};

export default Home;
