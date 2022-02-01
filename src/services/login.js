import APIKit from "./index";

export const login = async (data) => {
  try {
    const response = await APIKit({
      url: "/auth/login",
      method: "POST",
      data: data,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
