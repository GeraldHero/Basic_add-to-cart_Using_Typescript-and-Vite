import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProduct";
import { ReactElement } from "react";
import Product from "./Product";

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => {
        return item.sku === product.sku;
      });

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        ></Product>
      );
    });
  }

  const context = <main className="main main--products">{pageContent}</main>;

  return context;
};

export default ProductList;
