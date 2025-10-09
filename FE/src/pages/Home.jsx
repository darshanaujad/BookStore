import { useState } from 'react'





const Home = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount((prev) => prev + 3)
  }
  return (
    <div>
      <h1>Home Page</h1>
      <h1>Count is : {count}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Home
