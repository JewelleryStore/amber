const productData = require("../productData.json");
const goldPriceService = require("../services/goldPriceService");
const productFilterService = require("../services/productFilterService");
const priceCalculationService = require("../services/priceCalculationService");

const getProducts = async (req, res) => {
  try {
    const goldPrice = await goldPriceService.getGoldPrice();

    let products = productData.map((product) => {
      const price = priceCalculationService.calculatePrice(product, goldPrice);
      return { ...product, price, images: product.images };
    });

    const { minPrice, maxPrice, minPopularity, maxPopularity } = req.query;

    products = productFilterService.filterByPriceRange(
      products,
      minPrice,
      maxPrice
    );
    products = productFilterService.filterByPopularityScore(
      products,
      minPopularity,
      maxPopularity
    );

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

module.exports = { getProducts };
