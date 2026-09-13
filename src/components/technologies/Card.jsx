export default function Card({ stack, isInYourStack, addToStack }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl p-3">
      <div className="flex justify-between items-center">
        <div>
          <img src={stack.icon} alt={stack.name} className="w-12 h-12" />
        </div>
        <div>
          <p
            className={`text-xs font-bold inline  p-1 rounded-full text-white`}
            style={{ backgroundColor: stack.badge.themeColor }}
          >
            {stack.badge.label}
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">{stack.name}</h3>
      </div>
      <div>
        <p>{stack.description}</p>
      </div>
      <div>
        <ul className="flex justify-between items-center">
          <li>{stack.category}</li>
          <li>{stack.difficulty}</li>
          <li>⭐ {stack.rating}</li>
        </ul>
      </div>
      <div>
        {isInYourStack ? (
          <button className="text-[#d91b7e] border border-[#d91b7e] px-4 py-2 rounded-full w-full mt-5">
            ✓ Added to Stack
          </button>
        ) : (
          <button
            className="bg-black text-white px-4 py-2 rounded-full w-full mt-5"
            onClick={() => addToStack(stack.id)}
          >
            Add to Stack
          </button>
        )}
      </div>
    </div>
  );
}
