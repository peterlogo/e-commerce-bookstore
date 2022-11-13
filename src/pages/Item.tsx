import { Button, Image, Text } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { BookCard } from "../components";

export function Item(): JSX.Element {
  const location = useLocation();
  const book = location.state;

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 bg-white p-8 border rounded-md shadow-md">
        <BookCard
          title={book.title}
          author={book.author}
          description={book.description}
        />
      </div>
      <div className="space-y-4">
        <div>
          <Image src={book.imgUrl} width={250} height={300} fit="contain" />
        </div>
        <div className="flex justify-start items-center space-x-2">
          <Text className="font-medium text-lg">Price:</Text>
          <Text className="font-medium text-lg">
            ${book.price.substring(1)}
          </Text>
        </div>
        <div className="flex justify-start items-center space-x-2">
          <Text className="font-medium text-lg">Quantity:</Text>
          <Text className="font-medium text-lg">1</Text>
        </div>
        <div>
          <Button size="md" variant="filled" className="bg-blue-600">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
