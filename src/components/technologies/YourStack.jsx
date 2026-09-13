import YourStackLists from "./YourStackLists";

function YourStack({ yourStack, removeFromStack }) {
  return (
    <div className="p-1">
      <div>
        <h3 className="text-2xl">Your Stack</h3>
        <p>
          {yourStack.length > 0
            ? `${yourStack.length} Technology selected`
            : "No technologies selected yet"}
        </p>
      </div>
      {yourStack.length > 0 && (
        <YourStackLists
          yourStack={yourStack}
          removeFromStack={removeFromStack}
        />
      )}
    </div>
  );
}

export default YourStack;
