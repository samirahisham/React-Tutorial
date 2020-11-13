import { SET_ITEMS } from "./actionTypes";
import instance from "./instance";
export const getItems = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("items/");
      dispatch({
        type: SET_ITEMS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
