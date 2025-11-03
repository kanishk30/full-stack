import React, { useState, useCallback } from 'react'

const Callback = () => {
    const [items, setItems] = useState(['exercise', 'study', 'eat', 'play'])
    const removeItem = useCallback((removedItem) => {
        const arr = items.filter((item => item !== removedItem));
        setItems(arr);
        console.log("removeItem function")
    }, []);
    
  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {items.map((item) => (
            <div style={{display: "flex", gap: '8px', alignItems: "center"}}>
            <li>{item}</li>
            <button onClick={() => removeItem(item)}>X</button>
            </div>
        ))}
      </ul>
    </div>
  )
}

export default Callback
