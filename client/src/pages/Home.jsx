
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
const username = localStorage.getItem("username");
const Home = () => {
  return (
    <div>
      {username && (
        <div className="text-center text-xl md:text-3xl font-bold text-yellow-800 leading-tight">
          Welcome, {username}! to our jewelry store
        </div>
      )}
     <Hero/>
     <LatestCollection />
     <OurPolicy/>
    </div>
  )
}

export default Home
