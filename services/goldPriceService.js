const getGoldPrice = async () => {
  try {
    const response = await axios.get("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": process.env.GOLDAPI_KEY,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const goldPricePerOunce = response.data.price;
      const goldPricePerGram = goldPricePerOunce / 31.1035;

      console.log("Gold price fetched successfully:", goldPricePerGram);

      return goldPricePerGram;
    } else {
      throw new Error("Failed to retrieve gold price: " + response.statusText);
    }
  } catch (error) {
    console.error("Error fetching gold price:", error);
    throw new Error("Failed to retrieve gold price");
  }
};

module.exports = { getGoldPrice };
