import { Box, HStack, Input, Text } from "@chakra-ui/react";
import "./App.css";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { includes, takeLast } from "ramda";
import {
  convertValidD,
  convertValidYY,
  isValidInputM,
  isValidInputYYYY,
} from "./utils/input";
import { InputYYYY } from "./components/InputYYYY";
import { InputM } from "./components/InputM";
import { InputD } from "./components/InputD";
import { InputHH } from "./components/InputH";
import { InputMi } from "./components/InputMi";

const validStrings = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Tab",
  "Backspace",
  "Delete",
];

const numStringList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const isInvalidDate = (date: string) => {
  const d = dayjs(date);
  if (!d.isValid()) {
    return true;
  }
  return false;
};

export const App = () => {
  const [date, setDate] = useState("2023-07-01 00:00:00");
  const HH = dayjs(date).format("HH");
  const mm = dayjs(date).format("mm");

  return (
    <>
      <Box>{date}</Box>
      <HStack p={1} m={1}>
        <HStack>
          <InputYYYY date={date} setDate={setDate} />
          <Text>年</Text>
        </HStack>
        <HStack>
          <InputM date={date} setDate={setDate} />
          <Text>月</Text>
        </HStack>
        <HStack>
          <InputD date={date} setDate={setDate} />
          <Text>日</Text>
        </HStack>
        <HStack>
          <InputHH date={date} setDate={setDate} />
          <Text>時</Text>
          <InputMi date={date} setDate={setDate} />
          <Text>分</Text>
        </HStack>
      </HStack>
    </>
  );
};
