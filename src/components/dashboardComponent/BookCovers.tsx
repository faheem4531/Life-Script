import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getBookCover } from "@/store/slices/chatSlice";
import { CircularProgress } from "@mui/material";

interface BookCoversProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookCovers: React.FC<BookCoversProps> = ({ isLoading, setIsLoading }) => {
  const router = useRouter();
  const dispatch : any = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getBookCover())
        .unwrap()
        .then((res) => {
          setIsLoading(false);
          if (res.coverNumber) {
            router.push(`/dashboard/BookCover/ViewBookCover?CoverNumber=${res.coverNumber}`);
          } else {
            router.push("/dashboard/BookCover/SelectBookCover");
          }
        })
        .catch(() => {
          setIsLoading(false);
          router.push("/dashboard/BookCover/SelectBookCover");
        });
    }
  }, [dispatch, router, isLoading, setIsLoading]);

  return isLoading ? <CircularProgress /> : null;
};

export default BookCovers;
