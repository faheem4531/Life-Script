import { createToc, getToc } from "@/store/slices/chatSlice";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

const DraggableList = ({ data }) => {
  const dispatch: any = useDispatch();
  const [items, setItems] = useState([]);
  console.log("items", items);
  useEffect(() => {
    data && setItems(data);
  }, [data]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedItems = Array.from(items);
    const [reorderedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, reorderedItem);
    const updatedItemsWithIndex = updatedItems.map((item, index) => ({
      ...item,
      index: index + 1,
    }));

    dispatch(createToc({ tableOfContent: updatedItemsWithIndex }))
      .unwrap()
      .then(() => dispatch(getToc()))
      .catch(() => { });

    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable
                key={item.chapterId}
                draggableId={item.chapterId}
                index={index}
              >
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        p: "15px 29px",
                        bgcolor: "#F9F9F9",
                        borderRadius: "4px",
                        borderLeft: "8.25px solid #7F886B",
                        mb: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#30422E",
                            fontSize: "18px",
                          }}
                        >
                          {item?.index}{"."}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "14.539px",
                            color: "#30422E"
                          }}
                        >
                          {item?.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
