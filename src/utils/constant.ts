interface IParams {
  url: string;
  data?: any;
  method: "get" | "GET" | "POST" | "post" | "put" | "PUT";
}

export const request = async ({
  url = "",
  data = {},
  method = "get",
}: IParams) => {
  if (!url) {
    return;
  }
  let body: any = JSON.stringify(data);
  if (method.toUpperCase() === "GET") {
    body = null;
  }
  url =
    url[0] !== "/"
      ? "http://150.158.33.124:1234/faq/" + url
      : "http://150.158.33.124:1234/faq" + url;
  const res = await fetch(url, {
    method,
    cache: "no-cache",
    body,
  });
  return res.json();
};
