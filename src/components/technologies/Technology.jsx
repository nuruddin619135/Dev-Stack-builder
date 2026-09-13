import StackList from "./StackList";

function Technology() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-4">Explore the Technologies</h2>
      <p className="text-gray-600">
        Pick one technology per category to build your ideal stack.
      </p>
      <div>
        <StackList />
      </div>
    </div>
  );
}

export default Technology;
