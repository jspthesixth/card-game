import axios from "axios";
import { API_BASE_URL } from "@/api/services/constants";

export const fetchDeckData = async ({
  initDeckDrawCount = 52,
}: {
  initDeckDrawCount?: number;
}) => {
  return await axios.get(
    `${API_BASE_URL}/new/draw/?count=${initDeckDrawCount}`
  );
};
