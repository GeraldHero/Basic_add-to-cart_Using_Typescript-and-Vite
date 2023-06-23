import { ReactElement } from "react";
import { ReducerAction, ReducerActionType } from "../context/CartProvider";
import { ProductType } from "../context/ProductsProvider";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  // import images in vite
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? " > Item in Cart: check" : null;

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} className="product__img" alt={product.name} />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        {itemInCart}
        <button onClick={onAddToCart}>Add to Cart</button>
      </p>
    </article>
  );
  return content;
};

export default Product;
