const getGoldPrice = async () => {
  const defaultGoldPricePerOunce = 860.48;
  try {
    const response = await axios.get("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": process.env.GOLD_API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200 && response.data && response.data.price) {
      const goldPricePerGram = parseFloat(
        (response.data.price / 31.1035).toFixed(2)
      );
      console.log("Gold price fetched successfully:", goldPricePerGram);
      return goldPricePerGram;
    } else {
      console.log(
        `Failed to retrieve gold price: ${response.statusText}. Using default value.`
      );
    }
  } catch (error) {
    console.error("Error fetching gold price:", error);
  }

  const goldPricePerGram = parseFloat(
    (defaultGoldPricePerOunce / 31.1035).toFixed(2)
  );
  console.log(`Using default gold price per gram: ${goldPricePerGram}`);
  return goldPricePerGram;
};

module.exports = { getGoldPrice };
