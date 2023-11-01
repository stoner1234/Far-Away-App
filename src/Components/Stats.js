export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start your packing for the trip 👝</em>
      </p>
    );
  const newItems = item.length;
  const itemsPacked = item.filter((e) => e.packed).length;
  const percentage = Math.round((itemsPacked / newItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Packed Everything in your Cart, Ready to Go ✈️"
          : ` You have ${newItems} items in your list, and you already packed
          ${itemsPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
