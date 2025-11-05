import { useState, useEffect } from "react"
import { useUser } from "../context/useUser";
import { useNavigate } from 'react-router';
import { fetchBooks } from "../library/api";
import { FileMusic, KeyRoundIcon, MoveDiagonal, Music, Pyramid, RefreshCcwDotIcon, SuperscriptIcon, TractorIcon, Truck, TruckElectric, TruckIcon, UserRoundCheckIcon, UserRoundPlusIcon } from 'lucide-react';
import FloatingGrid from "../components/FloatingGrid"; 


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
      <section className="h-screen">
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
         <div className="w-[600px] h-full  relative ">
            <FloatingGrid />
          </div>
        </div>
        <div className="h-[20%] bg-[#d1e7ea] flex gap-5 items-center justify-center">
              <div className="w-[18%] h-[90%] bg-white rounded-2xl grid place-items-center" >
                <p> <span className="text-green-500 text-center"><TruckIcon size={30} /></span></p>
                <h2 className="font-bold text-2xl">Free Shipping</h2>
                <p className="font-semibold">On orders over ₹900</p>
              </div>
              <div className="w-[18%] h-[90%] bg-white rounded-2xl grid place-items-center" >
                <p> <span className="text-green-500 text-center"><RefreshCcwDotIcon size={30} /></span></p>
                <h2 className="font-bold text-2xl">Easy Returns</h2>
                <p className="font-semibold">7-day hassle-free returns</p>
              </div>
              <div className="w-[18%] h-[90%] bg-white rounded-2xl grid place-items-center" >
                <p> <span className="text-green-500 text-center"><Pyramid size={30} /></span></p>
                <h2 className="font-bold text-2xl">Secure Payments</h2>
                <p className="font-semibold">SSL encrypted transactions</p>
              </div>
              <div className="w-[18%] h-[90%] bg-white rounded-2xl grid place-items-center" >
                <p> <span className="text-green-500 text-center"><UserRoundCheckIcon size={30} /></span></p>
                <h2 className="font-bold text-2xl">24/7 Support</h2>
                <p className="font-semibold">Round-the-clock assistant</p>
              </div>
             
              
              
        </div>
      </section>
    </>
  )
}

export default Home
