export const DBQueries = {
  select: {
    all: () => "SELECT * FROM products",
  },
  insert: {
    singleProduct: () =>
      "INSERT INTO products (title,price,description,imageUrl) VALUES (?,?,?,?)",
  },
};
