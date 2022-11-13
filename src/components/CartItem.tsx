import { ActionIcon, Image, Text } from "@mantine/core";
import { FiX } from "react-icons/fi";
import { CartItemProps } from "../interfaces";
import { QuantityButton } from "./QuantityButton";

export function CartItem({
  imgUrl,
  title,
  author,
  price,
  quantity,
  onChangeQuantity,
  onRemoveItem,
}: CartItemProps): JSX.Element {
  return (
    <div className="bg-white flex justify-between items-start border rounded-md shadow-md  w-full mb-4 p-4">
      <div className="flex justify-start items-center space-x-4">
        <Image src={imgUrl} width={80} height={95} fit="contain" />
        <div>
          <Text className="font-semibold">
            Title: <span className="font-normal text-sm">{title}</span>
          </Text>
          <Text className="font-semibold">
            Author: <span className="font-normal text-sm">{author}</span>
          </Text>
        </div>
        <div>
          <Text className="font-semibold">Price: ${price}</Text>
          <div className="flex justify-around items-center space-x-6">
            <Text className="font-semibold">Quantity: </Text>
            <QuantityButton value={quantity} onChange={onChangeQuantity} />
          </div>
        </div>
      </div>
      <ActionIcon variant="transparent" onClick={onRemoveItem}>
        <FiX />
      </ActionIcon>
    </div>
  );
}
