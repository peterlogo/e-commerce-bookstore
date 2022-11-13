import { Image, UnstyledButton } from "@mantine/core";
import { ThumbnailProps } from "../interfaces";

export function Thumbnail({
  imgUrl,
  width,
  height,
  onClick,
}: ThumbnailProps): JSX.Element {
  return (
    <UnstyledButton onClick={onClick}>
      <Image
        src={imgUrl}
        width={width}
        height={height}
        fit="cover"
        radius="md"
        className="hover:scale-105 hover:opacity-90"
      />
    </UnstyledButton>
  );
}
