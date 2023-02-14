import { useState } from "react";
import Star from "./components/star";

const items: number[] = [...(new Array(5).keys() as any)];

function App() {
  const [activeIndex, setActiveIndex] = useState<number>();

  const onClickStar = (index: number) => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index));
  };

  return (
    <div className="container">
      {items.map((index) => (
        <Star
          onClick={() => onClickStar(index)}
          key={`star_${index}`}
          isActive={index <= activeIndex!}
        />
      ))}
    </div>
  );
}

export default App;
