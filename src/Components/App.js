import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];
export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItems(item) {
    return setItems((e) => [...e, item]);
  }

  function handelDeleteItem(id) {
    return setItems((e) => e.filter((e) => e.id !== id));
  }

  function handelToogleItems(id) {
    return setItems((e) =>
      e.map((e) => (e.id === id ? { ...e, packed: !e.packed } : e))
    );
  }
  function handelClearList() {
    const comfirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (comfirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        item={items}
        onDelete={handelDeleteItem}
        onToogle={handelToogleItems}
        onClearList={handelClearList}
      />
      <Stats item={items} />
    </div>
  );
}
