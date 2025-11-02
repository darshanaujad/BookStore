import { useState, useEffect } from "react"
import { UseUser } from "../context/useUser"
import { useNavigate } from "react-router"
import { fetchBook } from '../library/api'

const Home = () => {
  const { user } = UseUser();
  const { books, setBooks } = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if(user === null){
      navigate('/auth');
    }
  },
    [user, navigate]);

    useEffect(()=>{
      const loadBooks = async()=>{
        const books = await fetchBook();
        setBooks(books);
      }
      loadBooks() ;
    } , [])
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
