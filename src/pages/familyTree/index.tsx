// pages/index.js
import FamilyTree from "./tree";

const Home = () => {
  // Replace this with your actual family tree data
  const familyTreeData = {
    name: "AAAA AAAA",
    born: 1862,
    died: 1906,
    location: "Petersburg, VA",
    spouse: "heheh",
    childrens: [
      {
        name: "BBBB BBB",
        born: 1831,
        died: 1884,
        location: "Petersburg, VA",
        childrens: [
          {
            name: "M. Haseeb Khwaja",
            born: 1781,
            died: 1871,
            location: "Ireland/Petersburg, VA",
            spouse: "Lilly",
            childrens: [
              {
                name: "DDDD DDD",
                born: 1795,
                died: 1871,
                location: "Ireland/Petersburg, VA",
                childrens: [
                  {
                    name: "xx xx",
                    born: 1795,
                    died: 1871,
                    location: "Ireland/Petersburg, VA",
                    spouse: "Lilly2",
                    childrens: [
                        {
                          name: "yyyyy",
                          born: 1795,
                          died: 1871,
                          location: "Ireland/Petersburg, VA",
                          childrens: [
                            {
                              name: "zzzz",
                              born: 1795,
                              died: 1871,
                              location: "Ireland/Petersburg, VA",
                              spouse: "Lilly3",
                            },
                          ],
                        },
                      ],
                  },
                ],
              },
              {
                name: "dddd ddd",
                born: 1831,
                died: 1884,
                location: "Petersburg, VA",
              },
            ],
          },
          {
            name: "cccc cccc",
            born: 1795,
            died: 1871,
            location: "Ireland/Petersburg, VA",
          },
          {
            name: "DDDD  ddd DDD",
            born: 1795,
            died: 1871,
            location: "Ireland/Petersburg, VA",
            spouse: "lilly4",
            childrens: [
                {name: "222 2222",
            born: 1795,
            died: 1871,
            location: "Ireland/Petersburg, VA",}
            ]
          },
        ],
      },
      {
        name: "bbbb bbb",
        born: 1826,
        died: 1866,
        location: "Brunswick/Petersburg, VA",
        childrens: [
          {
            name: "EEEEE EE",
            born: 1792,
            died: 1845,
            location: "Montgomery, NC",
            childrens: [
                {
                  name: "ttttt tt",
                  born: 1795,
                  died: 1871,
                  location: "Ireland/Petersburg, VA",
                },
              ],
          },
          {
            name: "eeeee ee",
            born: 1793,
            died: 1882,
            location: "Montgomery, NC",
            childrens: [
                {
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
