import { Text } from "@mantine/core";
import { CartItem } from "../components";
import { increaseQuantity, removeFromCart } from "../features";
import { useAppDispatch, useAppSelector } from "../hooks";

export function Cart(): JSX.Element {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalBalance = useAppSelector((state) => state.cart.total);

  const dispatch = useAppDispatch();

  return (
    <>
      {cartItems.length === 0 ? (
        <Text className="p-6 rounded-md font-medium shadow-md border">
          No Item in cart at the moment
        </Text>
      ) : null}
      {cartItems.map(({ imgUrl, title, author, quantity, price, id }) => {
        return (
          <CartItem
            key={id}
            imgUrl={imgUrl}
            title={title}
            author={author}
            quantity={quantity}
            price={price}
            onChangeQuantity={(val) =>
              dispatch(increaseQuantity({ id, quantity: val }))
            }
            onRemoveItem={() => dispatch(removeFromCart({ id }))}
          />
        );
      })}
      <div className="flex flex-col items-end mt-6">
        <div className="flex justify-between items-center space-x-2 ">
          <Text className="p-2  rounded-md font-semibold shadow-md border">
            Total Price :
          </Text>
          <Text className="font-bold text-xl">
            ${totalBalance.toPrecision(4)}
          </Text>
        </div>
      </div>
    </>
  );
}
