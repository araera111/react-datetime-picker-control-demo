import { Input } from "@chakra-ui/react";
import dayjs from "dayjs";
import { includes } from "ramda";
import { useEffect, useState } from "react";
import {
  validStrings,
  numStringList,
  convertValidHH,
  isValidInputHH,
} from "../utils/input";

type InputMProps = {
  date: string;
  setDate: (date: string) => void;
};
export const InputHH = ({ date, setDate }: InputMProps) => {
  const [value, setValue] = useState(date);
  useEffect(() => {
    setValue(dayjs(date).format("HH"));
  }, [date]);
  return (
    <Input
      id="react-datetime-cntorol-input-HH"
      type="number"
      value={value}
      size="sm"
      rounded="md"
      w="44px"
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          const nextValue = dayjs(date)
            .add(1, "hours")
            .format("YYYY-MM-DD HH:mm:ss");
          setDate(nextValue);
          setValue(dayjs(nextValue).format("HH"));
          return;
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          const nextValue = dayjs(date)
            .subtract(1, "hours")
            .format("YYYY-MM-DD HH:mm:ss");
          setDate(nextValue);
          setValue(dayjs(nextValue).format("HH"));
          return;
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          document
            .querySelector<HTMLInputElement>("#react-datetime-cntorol-input-mi")
            ?.focus();
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          document
            .querySelector<HTMLInputElement>("#react-datetime-contorol-input-D")
            ?.focus();
        }

        /* 数字以外の入力を落とす */
        if (!validStrings.includes(e.key)) {
          e.preventDefault();
          return;
        }

        if (includes(e.key, numStringList)) {
          setValue(convertValidHH(value, e.key));
          e.preventDefault();
        }
      }}
      onChange={(e) => {
        setValue(e.currentTarget.value);
      }}
      onBlur={(e) => {
        if (!isValidInputHH(e.currentTarget.value)) {
          setValue(dayjs(date).format("HH"));
          return;
        }
        const nextValue = dayjs(date)
          .hour(parseInt(e.currentTarget.value, 10))
          .format("YYYY-MM-DD HH:mm:ss");
        setDate(nextValue);
      }}
    />
  );
};
