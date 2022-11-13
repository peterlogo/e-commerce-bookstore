import { Loader } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Thumbnail } from "../components";
import { useGetBooksQuery } from "../features";

export function Products() {
  const { data, isLoading } = useGetBooksQuery(null);

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {isLoading ? <Loader /> : null}
      {data &&
        data.map(({ id, imgUrl, ...rest }) => {
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
  );
}
