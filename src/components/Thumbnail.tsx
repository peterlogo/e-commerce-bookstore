import { Image } from "@mantine/core"
import { ThumbnailProps } from "../interfaces"

export function Thumbnail({ imgUrl }: ThumbnailProps) {
  return (
    <Image
      src={imgUrl}
      width={250}
      height={350}
      fit="cover"
      radius="md"
      className="hover:scale-105 hover:opacity-90"
    />
  )
}
