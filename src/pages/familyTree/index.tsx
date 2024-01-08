// pages/index.js
import { useEffect, useState } from "react";
import FamilyTree from "./tree";
import { useDispatch } from "react-redux";
import { getTreeData, selectTreeData } from "@/store/slices/chatSlice";
import FamilyTreeDataModal from "@/components/modal/FamilyTreeDataModal";
import SelectRelationModal from "@/components/modal/SelectRelationModal";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch: any = useDispatch();
  const treeData = useSelector(selectTreeData);
  const [familyTreeData, setFamilyTreeData] = useState({});
  console.log("333333", familyTreeData);

  useEffect(() => {
    dispatch(getTreeData())
      .unwrap()
      .then((res) => console.log("ressss", res))
      .catch(() => {});
  }, []);

  useEffect(() => {
    setFamilyTreeData(treeData);
  }, [treeData]);

  const familyTreeData1 = {
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

  const familyTreeData2 = {
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
                spouseBorn: "1997-01-04T08:52:14.601Z",
                spouseDied: "1997-01-04T08:52:14.601Z",
                spouseLocation: "qasoor",
                spouseGender: "Female",
                spouseName: "lilly",
                gender: "Male",
                childrens: [],
                _id: "659a939a9bab2758d1864d85",
              },
              {
                died: "2023-12-31T19:00:00.000Z",
                spouseDie: "2023-12-31T19:00:00.000Z",
                name: "ANGELANGELANGELANGEL",
                born: "1997-01-04T08:52:14.601Z",
                location: "qasoori",
                spouseName: "lilly",
                image:
                  "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                spouseImage:
                  "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                spouseBorn: "1997-01-04T08:52:14.601Z",
                spouseDied: "1997-01-04T08:52:14.601Z",
                spouseLocation: "qasoor",
                spouseGender: "Female",
                gender: "Male",
                childrens: [],
                _id: "659a939a9bab2758d1864d85",
              },
              {
                died: "2023-12-31T19:00:00.000Z",
                spouseDie: "2023-12-31T19:00:00.000Z",
                name: "ANGELANGELANGELANGEL",
                born: "1997-01-04T08:52:14.601Z",
                location: "qasoori",
                spouseName: "lilly",
                image:
                  "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                spouseImage:
                  "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                spouseBorn: "1997-01-04T08:52:14.601Z",
                spouseDied: "1997-01-04T08:52:14.601Z",
                spouseLocation: "qasoor",
                spouseGender: "Female",
                gender: "Male",
                childrens: [],
                _id: "659a939a9bab2758d1864d85",
              },
              {
                died: "2023-12-31T19:00:00.000Z",
                spouseDie: "2023-12-31T19:00:00.000Z",
                name: "ANGELANGELANGELANGEL",
                born: "1997-01-04T08:52:14.601Z",
                location: "qasoori",
                spouseName: "lilly",
                image:
                  "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                spouseImage:
                  "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
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
                    image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                    spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                    spouseBorn: "1997-01-04T08:52:14.601Z",
                    spouseDied: "1997-01-04T08:52:14.601Z",
                    spouseLocation: "qasoor",
                    spouseGender: "Female",
                    gender: "Male",
                    childrens: [],
                    _id: "659a939a9bab2758d1864d85"
                },
                {
                  died: "2023-12-31T19:00:00.000Z",
                  spouseDie: "2023-12-31T19:00:00.000Z",
                  name: "ANGELANGELANGELANGEL",
                  spouseName: "lilly",
                  born: "1997-01-04T08:52:14.601Z",
                  location: "qasoori",
                  image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                  spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
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
                      image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                      spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                      spouseBorn: "1997-01-04T08:52:14.601Z",
                      spouseDied: "1997-01-04T08:52:14.601Z",
                      spouseLocation: "qasoor",
                      spouseGender: "Female",
                      gender: "Male",
                      childrens: [],
                      _id: "659a939a9bab2758d1864d85"
                  },
                  {
                    died: "2023-12-31T19:00:00.000Z",
                    spouseDie: "2023-12-31T19:00:00.000Z",
                    name: "ANGELANGELANGELANGEL",
                    born: "1997-01-04T08:52:14.601Z",
                    location: "qasoori",
                    image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                    spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                    spouseBorn: "1997-01-04T08:52:14.601Z",
                    spouseDied: "1997-01-04T08:52:14.601Z",
                    spouseLocation: "qasoor",
                    spouseGender: "Female",
                    gender: "Male",
                    childrens: [],
                    _id: "659a939a9bab2758d1864d85"
                },
                {
                  died: "2023-12-31T19:00:00.000Z",
                  spouseDie: "2023-12-31T19:00:00.000Z",
                  name: "ANGELANGELANGELANGEL",
                  born: "1997-01-04T08:52:14.601Z",
                  location: "qasoori",
                  image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                  spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                  spouseBorn: "1997-01-04T08:52:14.601Z",
                  spouseDied: "1997-01-04T08:52:14.601Z",
                  spouseLocation: "qasoor",
                  spouseGender: "Female",
                  gender: "Male",
                  childrens: [],
                  _id: "659a939a9bab2758d1864d85",
                  spuseName: "kj",
              },
              {
                died: "2023-12-31T19:00:00.000Z",
                spouseDie: "2023-12-31T19:00:00.000Z",
                name: "ANGELANGELANGELANGEL",
                born: "1997-01-04T08:52:14.601Z",
                spuseName: "kj",
                location: "qasoori",
                image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                spouseBorn: "1997-01-04T08:52:14.601Z",
                spouseDied: "1997-01-04T08:52:14.601Z",
                spouseLocation: "qasoor",
                spouseGender: "Female",
                gender: "Male",
                childrens: [],
                _id: "659a939a9bab2758d1864d85"
            },
            {
              died: "2023-12-31T19:00:00.000Z",
              spuseName: "kj",
              spouseDie: "2023-12-31T19:00:00.000Z",
              name: "ANGELANGELANGELANGEL",
              born: "1997-01-04T08:52:14.601Z",
              location: "qasoori",
              image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
              spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
              spouseBorn: "1997-01-04T08:52:14.601Z",
              spouseDied: "1997-01-04T08:52:14.601Z",
              spouseLocation: "qasoor",
              spouseGender: "Female",
              gender: "Male",
              childrens: [],
              _id: "659a939a9bab2758d1864d85"
          }
                  ],
                  _id: "659a939a9bab2758d1864d85"
              }
                ],
                _id: "659a939a9bab2758d1864d85",
              },
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
                    image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                    spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                    spouseBorn: "1997-01-04T08:52:14.601Z",
                    spouseDied: "1997-01-04T08:52:14.601Z",
                    spouseLocation: "qasoor",
                    spouseGender: "Female",
                    gender: "Male",
                    childrens: [],
                    _id: "659a939a9bab2758d1864d85"
                },
                {
                  died: "2023-12-31T19:00:00.000Z",
                  spouseDie: "2023-12-31T19:00:00.000Z",
                  name: "ANGELANGELANGELANGEL",
                  born: "1997-01-04T08:52:14.601Z",
                  location: "qasoori",
                  image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                  spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
                  spouseBorn: "1997-01-04T08:52:14.601Z",
                  spouseDied: "1997-01-04T08:52:14.601Z",
                  spouseLocation: "qasoor",
                  spouseGender: "Female",
                  gender: "Male",
                  childrens: [],
                  _id: "659a939a9bab2758d1864d85"
              }
                ],
                _id: "659a939a9bab2758d1864d85",
              },
            ],
            _id: "659a939a9bab2758d1864d84",
          },
        ],
        _id: "659a939a9bab2758d1864d812",
      },
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
            image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
            spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
            spouseBorn: "1997-01-04T08:52:14.601Z",
            spouseDied: "1997-01-04T08:52:14.601Z",
            spouseLocation: "qasoor",
            spouseGender: "Female",
            gender: "Male",
            childrens: [],
            _id: "659a939a9bab2758d1864d85"
        },
        {
          died: "2023-12-31T19:00:00.000Z",
          spouseDie: "2023-12-31T19:00:00.000Z",
          name: "ANGELANGELANGELANGEL",
          born: "1997-01-04T08:52:14.601Z",
          location: "qasoori",
          image: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
          spouseImage: "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1704452239/thelifescript/q9ig8gmhg4yvvpzimqqa.jpg",
          spouseBorn: "1997-01-04T08:52:14.601Z",
          spouseDied: "1997-01-04T08:52:14.601Z",
          spouseLocation: "qasoor",
          spouseGender: "Female",
          gender: "Male",
          childrens: [],
          _id: "659a939a9bab2758d1864d85"
      }
        ],
        _id: "659a939a9bab2758d1864d85",
      },
    ],
  };

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
        _id: "659a939a9bab2758d1864d85",
      }
    ]
  }

  return (
    <div>
      <FamilyTree familyTreeData={familyTreeData2} />
    </div>
  );
};

export default Home;
