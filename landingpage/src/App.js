import assets from "./assets/index";
import "./App.css";
import { Download, Section, SectionWrapper, Features } from "./components";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of NFTs. Grow your NFT portfolio with us"
        description="Buy, store, collect NFTs, exchange crypto. Join 5+ million users globally."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="NFT Native Marketplace"
        description="Experience our NFT Marketplace's fluent UI design."
        mockupImg={assets.homeCards}
    
      />
      <Features />
      <SectionWrapper
        title="Store showcase"
        description="The app consists of two main screens - Home and Details. The first screen lists all NFT's, while the second shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner04"
        reverse={true}
      />
      <Footer banner="banner03" text="Proudly presented by:" textFinal="Diyan Y."/>
    </>
  );
};

export default App;
