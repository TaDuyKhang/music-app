import { useState } from "react";

export const TestComponent = (props: IProps) => {
  const sum = (num1: number, num2: number) => num1 + num2;
  const [count, setCount] = useState(sum(props.num1, props.num2));

  return <p>hello world {count}</p>;
};

interface IProps {
  num1?: number;
  num2?: number;
}
