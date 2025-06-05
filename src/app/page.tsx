import About from "@/components/about";
import HomePage from "./_home/page";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  );
}
