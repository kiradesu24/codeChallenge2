import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-10">
        <section className="hero text-center py-10 bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Company</h1>
          <p className="text-lg">Our mission is to deliver excellence.</p>
        </section>
        <section className="overview py-10">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>Learn about our history, mission, and values.</p>
        </section>
        <section className="services py-10">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p>Explore the range of services we offer.</p>
        </section>
        <section className="testimonials py-10">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p>"Fantastic service! Highly recommended."</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}