import { Input } from "@chakra-ui/react";
import dayjs from "dayjs";
import { includes } from "ramda";
import { useEffect, useState } from "react";
import {
  validStrings,
  numStringList,
  isValidInputD,
  convertValidD,
} from "../utils/input";

type InputMProps = {
  date: string;
  setDate: (date: string) => void;
};
export const InputD = ({ date, setDate }: InputMProps) => {
  const [value, setValue] = useState(date);
  useEffect(() => {
    setValue(dayjs(date).format("D"));
  }, [date]);
  return (
    <Input
      id="react-datetime-contorol-input-D"
      type="number"
      value={value}
      size="sm"
      rounded="md"
      w="44px"
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          const nextValue = dayjs(date)
            .add(1, "day")
            .format("YYYY-MM-DD HH:mm:ss");
          setDate(nextValue);
          setValue(dayjs(nextValue).format("D"));
          return;
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          const nextValue = dayjs(date)
            .subtract(1, "day")
            .format("YYYY-MM-DD HH:mm:ss");
          setDate(nextValue);
          setValue(dayjs(nextValue).format("D"));
          return;
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          document
            .querySelector<HTMLInputElement>("#react-datetime-cntorol-input-HH")
            ?.focus();
          return;
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          document
            .querySelector<HTMLInputElement>("#react-datetime-contorol-input-M")
            ?.focus();
          return;
        }

        /* 数字以外の入力を落とす */
        if (!validStrings.includes(e.key)) {
          e.preventDefault();
          return;
        }

        if (includes(e.key, numStringList)) {
          setValue(convertValidD(value, e.key));
          e.preventDefault();
        }
      }}
      onChange={(e) => {
        setValue(e.currentTarget.value);
      }}
      onBlur={(e) => {
        if (!isValidInputD(e.currentTarget.value)) {
          setValue(dayjs(date).format("D"));
          return;
        }
        const nextValue = dayjs(date)
          .date(parseInt(e.currentTarget.value, 10))
          .format("YYYY-MM-DD HH:mm:ss");
        setDate(nextValue);
      }}
    />
  );
};
