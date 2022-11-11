const commonHeader = {
  "Content-Type": "application/json;charset=UTF-8",
};

export const postAnswer = (body: any) =>
  fetch("http://150.158.33.124:1234/faq/client/create_ask", {
    method: "POST",
    body: JSON.stringify(body),
    headers: commonHeader,
  });
