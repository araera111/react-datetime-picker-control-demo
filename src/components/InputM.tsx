import { Input } from "@chakra-ui/react";
import dayjs from "dayjs";
import { includes } from "ramda";
import { useEffect, useState } from "react";
import {
  validStrings,
  numStringList,
  isValidInputM,
  convertValidM,
} from "../utils/input";

type InputMProps = {
  date: string;
  setDate: (date: string) => void;
};
export const InputM = ({ date, setDate }: InputMProps) => {
  const [value, setValue] = useState(date);
  useEffect(() => {
    setValue(dayjs(date).format("M"));
  }, [date]);
  return (
    <Input
      id="react-datetime-contorol-input-M"
      type="number"
      value={value}
      size="sm"
      rounded="md"
      w="44px"
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          const nextValue = dayjs(date)
            .add(1, "month")
            .format("YYYY-MM-DD HH:mm:ss");
          setDate(nextValue);
          setValue(dayjs(nextValue).format("M"));
          return;
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          const nextValue = dayjs(date)
            .subtract(1, "month")
            .format("YYYY-MM-DD HH:mm:ss");
          setDate(nextValue);
          setValue(dayjs(nextValue).format("M"));
          return;
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          document
            .querySelector<HTMLInputElement>("#react-datetime-contorol-input-D")
            ?.focus();
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          document
            .querySelector<HTMLInputElement>(
              "#react-datetime-contorol-input-YYYY"
            )
            ?.focus();
        }

        /* 数字以外の入力を落とす */
        if (!validStrings.includes(e.key)) {
          e.preventDefault();
          return;
        }

        if (includes(e.key, numStringList)) {
          setValue(convertValidM(value, e.key));
          e.preventDefault();
        }
      }}
      onChange={(e) => {
        setValue(e.currentTarget.value);
      }}
      onBlur={(e) => {
        if (!isValidInputM(e.currentTarget.value)) {
          setValue(dayjs(date).format("M"));
          return;
        }
        const nextValue = dayjs(date)
          .month(parseInt(e.currentTarget.value, 10) - 1)
          .format("YYYY-MM-DD HH:mm:ss");
        setDate(nextValue);
      }}
    />
  );
};
