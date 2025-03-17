import Card from "./Card";

export default function TopPicksBar() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <Card
              title={"Gardening Deals & Promotions"}
              btnTxt="Find a Deal"
              text="Get up to 10% off on gardening tools and services. Limited time offers in the UK, Germany, and France."
              imgSrc={"/img/gardening-tools-promotion.jpg"}
            />
            <Card
              title={"Garden Tools Range"}
              btnTxt="Browse Tools"
              text="We have a wide range of tools for all gardening needs: from shovels and pruners to lawnmowers and hedge trimmers."
              imgSrc={"/img/gardening-tools-range.jpg"}
            />
            <Card
              title={"Special Occasion Gardens"}
              btnTxt="Garden Design Services"
              text="We offer custom garden designs, perfect for weddings, events, and special occasions."
              imgSrc={"/img/special-occasion-garden.jpg"}
            />
            <Card
              title={"Garden Club Membership"}
              btnTxt="Join Now"
              text="Sign up for exclusive gardening tips, special deals on plants, tools, and more."
              imgSrc={"/img/garden-club-membership.jpg"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
