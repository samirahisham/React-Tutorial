import instance from "./instance";

export const signup = (userData) => {
  return async () => {
    try {
      const response = await instance.post("register/", userData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
};
export const login = () => {};
