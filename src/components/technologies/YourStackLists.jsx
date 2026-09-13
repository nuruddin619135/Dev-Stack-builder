import YourStackCard from "./YourStackCard";

function YourStackLists({ yourStack, removeFromStack }) {
  return (
    <div className="flex flex-col gap-2 mt-3">
      {yourStack.map((item) => (
        <YourStackCard
          key={item.id}
          item={item}
          removeFromStack={removeFromStack}
        />
      ))}
    </div>
  );
}

export default YourStackLists;
