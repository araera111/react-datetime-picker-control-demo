import { Input } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { convertValidYY, isValidInputYYYY, validStrings } from "../utils/input";

type InputYYYYProps = {
  date: string;
  setDate: (date: string) => void;
};
export const InputYYYY = ({ date, setDate }: InputYYYYProps) => {
  const [value, setValue] = useState(date);
  useEffect(() => {
    setValue(dayjs(date).format("YYYY"));
  }, [date]);
  return (
    <Input
      id="react-datetime-contorol-input-YYYY"
      size="sm"
      type="number"
      value={value}
      w="60px"
      rounded="md"
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          const nextValue = dayjs(date)
            .add(1, "year")
            .format("YYYY-MM-DD HH:mm:ss");
          setDate(nextValue);
          setValue(dayjs(nextValue).format("YYYY"));
          return;
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          const nextValue = dayjs(date)
            .subtract(1, "year")
            .format("YYYY-MM-DD HH:mm:ss");
          setValue(dayjs(nextValue).format("YYYY"));
          setDate(nextValue);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          document
            .querySelector<HTMLInputElement>("#react-datetime-contorol-input-M")
            ?.focus();
        }

        /* 数字以外の入力を落とす */
        if (!validStrings.includes(e.key)) {
          e.preventDefault();
        }
      }}
      onChange={(e) => {
        setValue(e.currentTarget.value);
      }}
      onBlur={(e) => {
        const isValid = isValidInputYYYY(e.currentTarget.value);
        const converted = convertValidYY(
          e.currentTarget.value,
          parseInt(dayjs().format("YYYY"), 10)
        );
        const nextValue = isValid
          ? dayjs(date).year(converted).format("YYYY-MM-DD HH:mm:ss")
          : dayjs(date).format("YYYY-MM-DD HH:mm:ss");
        setValue(dayjs(nextValue).format("YYYY"));
        setDate(nextValue);
      }}
    />
  );
};
