import Navbar from './Nav';
import Hero from './Hero';
import YourComponent from './Content';
import ReviewCard from './Card';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <YourComponent />
      <ReviewCard />
    </div>
  );
};

export default Home;
