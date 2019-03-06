import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import URI from "urijs";

import myConfig from "@/config/";

axios.defaults.validateStatus = () => true;
axios.defaults.timeout = 10000;

function checkStatus(data: AxiosResponse) {
  return data;
}

export default (config: AxiosRequestConfig, useMock?: boolean) => {
  // 解决 ie11 ajax 缓存问题
  if (!config.method || config.method.toUpperCase() === "GET") {
    if (config.url) {
      const uri = URI(config.url);
      config.url = uri.addQuery({ __timestamp__: Date.now() }).readable();
    }
  }

  config.baseURL = useMock ? myConfig.apiHostMock : myConfig.apiHost;
  return axios(config)
    .then(checkStatus)
    .catch((err) => err);
};
