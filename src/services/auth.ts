import api from "./api";

export const TOKEN = "@rpgfilemanagement";

export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null;

export const getToken = () => localStorage.getItem(TOKEN);

export const login = async (
  username: string,
  password: string
): Promise<any> => {
  try {
    const result = await api.post("./token", {
      username,
      password,
    });
    const token = result.data;

    if (token) {
      localStorage.setItem(TOKEN, token.toString());
    }
  } catch (err: any) {
    return {
      success: false,
      error: err?.response?.data,
    };
  }
};

export const logout = () => {
    localStorage.removeItem(TOKEN);
}

export default {
  isAuthenticated,
  getToken,
  login,
  logout
};
