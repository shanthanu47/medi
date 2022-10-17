import "./AasanaPage.css";
import AasanaCard from "./components/AasanaCard";

const AasanaPage = () => {
  return (
    <div className="aasanaCardContainer">
      <AasanaCard
        title={"Uttanasana"}
        subtitle={"Stand forward Bending"}
        description={
          "Standing Forward Bend, or Uttanasana, is a simple yet effective forward fold that urges you toward greater flexibility along you back body."
        }
        youtubeEmmbedId={"0KzyEgkq7zw"}
        imgUrl={"./images/hathaYoga.svg"}
      />

      <AasanaCard
        title={"Bhujangasana"}
        subtitle={"Cobra Pose"}
        description={
          "Bhujangasana or Cobra Pose is a reclining back-bending asana in hatha yoga and modern yoga as exercise."
        }
        youtubeEmmbedId={"75eZwVHIL-U"}
        imgUrl={"./images/PowerYoga.svg"}
      />
    </div>
  );
};

export default AasanaPage;
