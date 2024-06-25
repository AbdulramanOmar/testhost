import {
  Button,
  Hero,
  Meet,
  Message,
  PricePlan,
  Section,
  Testimeniols,
  Travel,
} from "../componet/index";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Button title="Dashboard" path="/admin"  />
      <Meet />
      <Button title="About" path="/about" />
      <Section
        title="heroCard1"
        prag="sectionparg"
        img={require("../componet/Assent/section t (1).jpg")}
        id="mentol"
        path="/programs"
      />
      <Section
        title="heroCard2"
        prag="sectionparg1"
        img={require("../componet/Assent/DSC04283_11zon (2).jpg")}
        revres={true}
        id="Specialized"
        path="/programs"
      />
      <Section
        title="heroCard3"
        prag="sectionparg2"
        img={require("../componet/Assent/section t (2).jpg")}
        id="Traveling"
        path="/trips"
      />
      <Section
        title="heroCard4"
        prag="sectionparg3"
        img={require("../componet/Assent/section t (3).jpg")}
        revres={true}
        id="Workshops"
        path="/programs"
      />
         <Section
        title="heroCard5"
        prag="sectionparg4"
        img={require("../componet/Assent/footer (2).jpg")}
        id="Cooperative training"
        path="/programs"
      />
      <Section
        title="heroCard6"
        prag="sectionparg5"
        img={require("../componet/Assent/silder (6).jpg")}
        revres={true}
        id="Conferences"
        path="/programs"
      />
       <Button title="Programs" path="/programs"  />
       <PricePlan />
      <Travel />
      <Button title="herobuttonTwo" path="/trips"  />
      <Testimeniols />
      <Message />
    </div>
  );
};

export default Home;
