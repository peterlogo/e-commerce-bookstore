import { Button, Image, Text } from "@mantine/core";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookCard } from "../components";
import { QuantityButton } from "../components/QuantityButton";
import { addToCart } from "../features";
import { useAppDispatch } from "../hooks";

export function Item(): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);

  const location = useLocation();
  const book = location.state;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-12">
      <div className="col-span-2 bg-white p-8 border rounded-md shadow-md">
        <BookCard
          title={book.title}
          author={book.author}
          description={book.description}
        />
      </div>
      <div className="space-y-4">
        <Image
          src={book.imgUrl}
          width={250}
          height={380}
          fit="cover"
          radius="md"
        />
        <div className="flex justify-start items-center space-x-2">
          <Text className="font-medium text-xl">Price:</Text>
          <Text className="font-medium text-xl">
            ${book.price.substring(1)}
          </Text>
        </div>
        <div className="flex justify-start items-center space-x-2">
          <Text className="font-medium text-xl">Quantity:</Text>
          <QuantityButton
            value={quantity}
            onChange={(val) => setQuantity(val)}
          />
        </div>
        <div>
          <Button
            size="md"
            variant="filled"
            className="bg-blue-600"
            onClick={() => {
              dispatch(addToCart({ ...book, quantity }));
              navigate("/cart");
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
