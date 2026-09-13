import data from "./data.json";
import Card from "./Card";
import { useState } from "react";
import YourStack from "./YourStack";
function StackList() {
  const [stacks, setStacks] = useState(data);
  const [yourStack, setYourStack] = useState([]);
  function addToStack(id) {
    setYourStack([...yourStack, id]);
  }
  function removeFromStack(id) {
    setYourStack(yourStack.filter((item) => item !== id));
  }
  return (
    <div className="flex">
      <div className="flex-3">
        <div className="grid grid-cols-3 gap-5 p-3 ">
          {stacks.map((item) => {
            return (
              <Card
                key={item.id}
                stack={item}
                isInYourStack={yourStack.includes(item.id)}
                addToStack={addToStack}
              />
            );
          })}
        </div>
      </div>

      <div className="flex-1 ">
        <YourStack
          yourStack={stacks.filter((item) => yourStack.includes(item.id))}
          removeFromStack={removeFromStack}
        />
      </div>
    </div>
  );
}

export default StackList;
