const filterByPriceRange = (products, minPrice, maxPrice) => {
  if (minPrice || maxPrice) {
    products = products.filter((product) => {
      const price = parseFloat(product.price);
      return (
        (!minPrice || price >= parseFloat(minPrice)) &&
        (!maxPrice || price <= parseFloat(maxPrice))
      );
    });
  }
  return products;
};

const filterByPopularityScore = (products, minPopularity, maxPopularity) => {
  if (minPopularity || maxPopularity) {
    products = products.filter((product) => {
      const popularityScore = product.popularityScore;
      return (
        (!minPopularity || popularityScore >= parseFloat(minPopularity)) &&
        (!maxPopularity || popularityScore <= parseFloat(maxPopularity))
      );
    });
  }
  return products;
};

module.exports = {
  filterByPriceRange,
  filterByPopularityScore,
};
