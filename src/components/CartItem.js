import React, { useContext } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  // const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  const trashIconClassName = hovered
    ? "ri-delete-bin-fill"
    : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={trashIconClassName}
        onClick={() => removeFromCart(item)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;

// onMouseEnter={() => setHovered(true)}
// onMouseLeave={() => setHovered(false)}
