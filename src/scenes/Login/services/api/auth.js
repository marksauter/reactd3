export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    if (email === "asdf@asdf.com" && password === "asdf") {
      resolve({
        email,
      });
    } else {
      reject({
        message: "User not found",
      });
    }
  });
};

