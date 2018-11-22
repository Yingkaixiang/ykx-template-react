const config = {
  development: {
    apiHost: "http://api.github.com",
    apiHostMock: "http://127.0.0.1:3000",
  },
  production: {
    apiHost: "http://api.github.com",
    apiHostMock: "http://127.0.0.1:3000",
  },
};

export default config[process.env.NODE_ENV || ""];
