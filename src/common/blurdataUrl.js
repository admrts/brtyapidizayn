const blurData = async (src) => {
  try {
    const source = src;

    const buffer = await fetch(source).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    console.log(base64);
  } catch (err) {
    err;
  }
};

export default blurData;
