(async () => {
  try {
    const data = await axios.post(
      `http://localhost:8080/api/highLight/rooms`,
      { title: "testTitle", tag: 1 },
      {
        withCredentials: true,
      }
    );

    console.log(data);

    if (data.data.redirect) location.href = data.data.redirect;
    if (data.data.error) console.error("error : ", data.data.error);
    if (data.data.result) console.log("result : ", data.data.result);
  } catch (err) {}
})();