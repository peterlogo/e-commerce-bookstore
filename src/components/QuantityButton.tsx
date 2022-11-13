import {
  NumberInputHandlers,
  Group,
  ActionIcon,
  NumberInput,
} from "@mantine/core";
import { useRef } from "react";
import { QuantityButtonProps } from "../interfaces";

export function QuantityButton({ value, onChange }: QuantityButtonProps) {
  const handlers = useRef<NumberInputHandlers>();

  return (
    <Group spacing={5}>
      <ActionIcon
        size={30}
        variant="default"
        onClick={() => handlers.current?.decrement()}
      >
        –
      </ActionIcon>

      <NumberInput
        hideControls
        value={value}
        onChange={onChange}
        handlersRef={handlers}
        size="xs"
        min={1}
        step={1}
        styles={{ input: { width: 54, textAlign: "center" } }}
      />

      <ActionIcon
        size={30}
        variant="default"
        onClick={() => handlers.current?.increment()}
      >
        +
      </ActionIcon>
    </Group>
  );
}
