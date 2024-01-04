// pages/index.js
import FamilyTree from "./tree";

const Home = () => {
  // Replace this with your actual family tree data
  const familyTreeData = {
    id: 1,
    name: "AAAA AAAA",
    born: 1862,
    died: 1906,
    location: "Petersburg, VA",
    spouse: "heheh",
    spouseBorn: 1870,
    spouseDeath: 1900,
    spouseLocation: "Lahore",
    childrens: [
      {
        id: 1,
        name: "M. Haseeb Khwaja",
        born: 1831,
        location: "Petersburg, VA",
        childrens: [
          {
            id: 1,
            name: "M. Haseeb Khwaja",
            died: 1871,
            location: "Ireland/Petersburg, VA",
            spouse: "Lilly",
            spouseBorn: 1870,
            spouseDeath: 1900,
            spouseLocation: "Lahore",
            childrens: [
              {
                id: 1,
                name: "DDDD DDD",
                born: 1795,
                died: 1871,
                location: "Ireland/Petersburg, VA",
                childrens: [
                  {
                    id: 1,
                    name: "xx xx",
                    born: 1795,
                    died: 1871,
                    location: "Ireland/Petersburg, VA",
                    spouse: "Lilly2",
                    spouseBorn: 1870,
                    spouseDeath: 1900,
                    spouseLocation: "Lahore",
                    childrens: [
                      {
                        id: 1,
                        name: "yyyyy",
                        born: 1795,
                        died: 1871,
                        location: "Ireland/Petersburg, VA",
                        childrens: [
                          {
                            id: 1,
                            name: "zzzz",
                            born: 1795,
                            died: 1871,
                            location: "Ireland/Petersburg, VA",
                            spouse: "Lilly3",
                            spouseBorn: 1870,
                            spouseDeath: 1900,
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
                born: 1831,
                died: 1884,
                location: "Petersburg, VA",
              },
            ],
          },
          {
            id: 1,
            name: "M. Ali Haseeb Khwaja",
            born: 1795,
            died: 1871,
            location: "Ireland/Petersburg, VA",
          },
          {
            id: 1,
            name: "DDDD  ddd DDD",
            born: 1795,
            died: 1871,
            location: "Ireland/Petersburg, VA",
            spouse: "lilly4",
            spouseBorn: 1870,
            spouseDeath: 1900,
            spouseLocation: "Lahore",
            childrens: [
              {
                id: 1,
                name: "222 2222",
                born: 1795,
                died: 1871,
                location: "Ireland/Petersburg, VA",
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "bbbb bbb",
        born: 1826,
        died: 1866,
        location: "Brunswick/Petersburg, VA",
        childrens: [
          {
            id: 1,
            name: "EEEEE EE",
            born: 1792,
            died: 1845,
            location: "Montgomery, NC",
            childrens: [
              {
                id: 1,
                name: "ttttt tt",
                born: 1795,
                died: 1871,
                location: "Ireland/Petersburg, VA",
              },
            ],
          },
          {
            id: 1,
            name: "eeeee ee",
            born: 1793,
            died: 1882,
            location: "Montgomery, NC",
            childrens: [
              {
                id: 1,
                name: "LLLLLLLL LL",
                born: 1795,
                died: 1871,
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
