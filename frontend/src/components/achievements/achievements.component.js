import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Achievements = () => {
  const { character } = useSelector((state) => state.user);
  const { xp, level, wordsKnown } = character.attributes;
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const calculateAchievements = () => {
      const newAchievements = [];

      let highestWordsAchievement = Math.floor(wordsKnown / 10) * 10;
      if (highestWordsAchievement > 0) {
        newAchievements.push(`Learned ${highestWordsAchievement} words`);
      }

      let highestXpAchievement = Math.floor(xp / 100) * 100;
      if (highestXpAchievement > 0) {
        newAchievements.push(`Reached ${highestXpAchievement} XP`);
      }

      setAchievements(newAchievements);
    };

    calculateAchievements();
  }, [xp, level, wordsKnown]);

  return (
    <div className="flex gap-4 pb-4">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br bg-japanese-brown shadow-lg"
        >
          <span className="text-white text-m font-bold pixel-font">
            {achievement}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
