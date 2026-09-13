function YourStackCard({ item, removeFromStack }) {
  return (
    <div className="flex items-center justify-between h-16 border border-gray-300 rounded-lg p-3">
      <div className="flex items-center gap-2">
        <img className="w-10 h-10" src={item.icon} alt={item.name} />
        <h3>{item.name}</h3>
      </div>
      <div>
        <button onClick={() => removeFromStack(item.id)}>✕</button>
      </div>
    </div>
  );
}

export default YourStackCard;
