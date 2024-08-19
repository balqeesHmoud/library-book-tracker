import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main className="flex-grow" />
      <Footer />
    </div>
  );
}
