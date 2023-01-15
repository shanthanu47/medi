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
        imgUrl={"./images/forward lean.svg"}
      />

      <AasanaCard
        title={"Bhujangasana"}
        subtitle={"Cobra Pose"}
        description={
          "Bhujangasana or Cobra Pose is a reclining back-bending asana in hatha yoga and modern yoga as exercise."
        }
        youtubeEmmbedId={"75eZwVHIL-U"}
        imgUrl={"./images/bujanga.svg"}
      />
      <AasanaCard
        title={"Pranayama"}
        subtitle={"Breathing pose"}
        description={
          "Pranayama is the yogic practice of focusing on breath. In Sanskrit, prana means vital life force"
        }
        youtubeEmmbedId={"395ZloN4Rr8"}
        imgUrl={"./images/sidda.svg"}
        />

      <AasanaCard
        title={"Balasana"}
        subtitle={"child pose"}
        description={
          "The child's pose helps to stretch your back and muscles around your hips. In this pose, kneel and sit on your knees ."
        }
        youtubeEmmbedId={"2MJGg-dUKh0"}
        imgUrl={"./images/child pose.svg"}
        />
      <AasanaCard
        title={"Vrikshasana"}
        subtitle={"Tree pose"}
        description={
          "Tree Pose is a strengthening posture that can help build confidence."
        }
        youtubeEmmbedId={"wdln9qWYloU"}
        imgUrl={"./images/tree.svg"}

        
        />
      <AasanaCard
        title={"Surya Namaskar"}
        subtitle={"Sun salute Pose"}
        description={
          "Sun Salutations, also called Surya Namaskars or 'Sun Salutes' by yogi practitioners."
        }
        youtubeEmmbedId={"uMV4Nq6jpu0"}
        imgUrl={"./images/sun salute.svg"}
        />  
      
      <AasanaCard
        title={"Sarvangasana"}
        subtitle={"Bridge excercise"}
        description={
          "Strengthens the back, buttocks, and hamstrings. Improves circulation of blood Helps alleviate stress and mild depression.."
        }
        youtubeEmmbedId={"NnbvPeAIhmA"}
        imgUrl={"./images/bridge.svg"}
        />
      
      
      <AasanaCard
        title={"Malasana"}
        subtitle={"Squat pose"}
        description={
          "In it you utilize the complete range of motion of the legs by bending the knees fully until the pelvis is resting at the back of the heels."
        }
        youtubeEmmbedId={"AYIKJwOw7Fo"}
        imgUrl={"./images/squat.svg"}
        />  
        
    </div>
  );
};

export default AasanaPage;
