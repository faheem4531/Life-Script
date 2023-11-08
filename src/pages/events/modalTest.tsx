import CustomizationDialog from "@/components/modal/CustomizationDialog";
import { useState } from "react";
import AddQuestion from "./addQuestion";

export default function Modal() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <CustomizationDialog
        open={true}
        title="Add new question"
        handleClose={() => {}}
        customStyles={{ backgroundColor: "auto" }}
      >
        <AddQuestion />
      </CustomizationDialog>
    </>
  );
}
