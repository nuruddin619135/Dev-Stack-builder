import YourStackCard from "./YourStackCard";

function YourStackLists({ yourStack, removeFromStack, removeAllFromStack }) {
  return (
    <div className="flex flex-col gap-2 mt-3">
      {yourStack.map((item) => (
        <YourStackCard
          key={item.id}
          item={item}
          removeFromStack={removeFromStack}
        />
      ))}
      <button
        className="w-full  py-2 rounded-full text-red-500 font-medium border border-red-200 bg-red-50 mt-2"
        onClick={removeAllFromStack}
      >
        Remove all
      </button>
    </div>
  );
}

export default YourStackLists;
