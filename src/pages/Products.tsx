import { Loader } from "@mantine/core"
import { Thumbnail } from "../components"
import { useGetBooksQuery } from "../features"

export function Products() {
  const { data, isLoading } = useGetBooksQuery(null)
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
      {isLoading ? <Loader /> : null}
      {data &&
        data.map(({ id, imgUrl }) => {
          return <Thumbnail key={id} imgUrl={imgUrl} />
        })}
    </div>
  )
}
