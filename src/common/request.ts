import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "axios";

import myConfig from "@/config/";

function checkStatus(data: AxiosResponse) {
  return data;
}

export default (
  config: AxiosRequestConfig,
  useMock?: boolean,
): AxiosPromise => {
  config.baseURL = useMock ? myConfig.apiHostMock : myConfig.apiHost;
  return axios(config)
    .then(checkStatus)
    .catch((err) => err);
};
