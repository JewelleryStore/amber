const calculatePrice = (product, goldPrice) => {
  const price = (product.popularityScore + 1) * product.weight * goldPrice;
  return parseFloat(price.toFixed(2));
};

module.exports = { calculatePrice };
