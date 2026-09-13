import data from "./data.json";
import Card from "./Card";
import { useState } from "react";
import YourStack from "./YourStack";
import { toast } from "react-toastify";
import { useEffect } from "react";
function StackList() {
  const [stacks, setStacks] = useState(null);
  const [yourStack, setYourStack] = useState([]);
  function addToStack(id) {
    if (yourStack.includes(id)) {
      toast.error("The same technology cannot be added twice");
      return;
    }
    setYourStack([...yourStack, id]);
    let name = stacks.find((item) => item.id === id)?.name;
    toast.success(`${name}  added successfully`);
  }
  function removeFromStack(id) {
    setYourStack(yourStack.filter((item) => item !== id));
    let name = stacks.find((item) => item.id === id)?.name;
    toast.error(`${name} removed successfully`);
  }
  function removeAllFromStack() {
    setYourStack([]);
    toast.error("All stacks removed successfully");
  }

  useEffect(() => {
    setStacks(data);
  }, []);

  if (!stacks) return <p className=" text-2xl text-center">Loading...</p>;
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
          removeAllFromStack={removeAllFromStack}
        />
      </div>
    </div>
  );
}

export default StackList;
