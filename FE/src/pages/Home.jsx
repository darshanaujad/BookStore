import { useState, useEffect } from "react"
import { useUser } from "../context/useUser";
import { useNavigate } from 'react-router';
import { fetchBooks } from "../library/api";
import { RefreshCcwDotIcon, TractorIcon, Truck, TruckElectric, TruckIcon } from 'lucide-react';


const Home = () => {
  const { user } = useUser();
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/auth');
    }
  }, [user, navigate]);

  useEffect(() => {
    const loadBooks = async () => {
      const books = await fetchBooks(); // Wait for the Promise to resolve
      setBooks(books);
    };
    loadBooks(); // Call the async function
  }, []);


  return (
    <>
      <section className="h-screen ">
        <div className="h-[80%] flex gap-2 justify-center bg-gradient-to-br from-[#fefefe]  to-[#ffeaea]">
          <div className="w-[600px]  flex justify-center flex-col px-20 gap-3">
            <div>
              <h2 className="text-6xl font-bold">Find your next <span className="text-blue-500">favorite</span> book.</h2>
            </div>
            <div>
              <p className="text-gray-600 ">Curated bestsellers, new releases, and timeless classics delivered to your doorstep.</p>
            </div>
            <div className="flex gap-2" >
              <button className="bg-yellow-500 px-5 py-3 rounded-[17px] text-white font-semibold">Shop Bestsellers</button>
              <button className="bg-transperent px-5 py-3 rounded-[17px]  text-blue-500 border-2 border-blue-400 hover:bg-blue-200">Browse Categories</button>
            </div>
            <div className="flex gap-2">
              <p className="flex gap-1 items-center"><span className="text-green-500"><TruckIcon size={18} /></span>Free shipping over ₹999</p>
              <p className="flex gap-1 items-center"><span className="text-green-500"><RefreshCcwDotIcon size={17} /></span> Easy 7-day returns</p>
            </div>
          </div>
          <div className="w-[600px]">

          </div>
        </div>
        <div className="h-[20%] bg-[#39e0fb]">

        </div>
      </section>
    </>
  )
}

export default Home
