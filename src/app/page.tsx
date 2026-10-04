import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Features />
      <Pricing />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}

