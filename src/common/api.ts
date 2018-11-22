import request from "./request";

export function requestTest() {
  return request(
    {
      url: "/login",
    },
    true,
  );
}
