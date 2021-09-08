const url = "http://localhost:3333/login";

const postMethod = () => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: "dev@dev.com", password: "developer" }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
};

export const x = async () => {
  const y = await postMethod();
  console.log(y);
  return y;
};