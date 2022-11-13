import { Text } from "@mantine/core";
import { BookCardProps } from "../interfaces";

export function BookCard({
  title,
  author,
  description,
}: BookCardProps): JSX.Element {
  return (
    <>
      <div className="space-y-2 pb-2">
        <Text className="font-medium text-lg">Title:</Text>
        <Text>{title}</Text>
      </div>
      <div className="space-y-2 pb-2">
        <Text className="font-medium text-lg">Author:</Text>
        <Text>{author}</Text>
      </div>
      <div className="space-y-2">
        <Text className="font-medium text-lg">Description:</Text>
        <Text>{description}</Text>
      </div>
    </>
  );
}
