import { Loader, Text } from "@mantine/core";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Thumbnail } from "../components";
import { useGetBooksQuery } from "../features";

export function Home(): JSX.Element {
  const { data, isLoading } = useGetBooksQuery(null);

  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-start items-center mb-4 space-x-2">
        <FiHome size={20} />
        <Text className="font-medium text-xl">Popular books for the day</Text>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? <Loader /> : null}
        {data &&
          data.slice(0, 3).map(({ id, imgUrl, ...rest }) => {
            return (
              <Thumbnail
                key={id}
                imgUrl={imgUrl}
                width={250}
                height={350}
                onClick={() =>
                  navigate(`/product/${id}`, { state: { id, imgUrl, ...rest } })
                }
              />
            );
          })}
      </div>
    </>
  );
}
