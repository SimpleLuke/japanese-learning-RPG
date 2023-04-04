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
    <div className="flex gap-4 pb-6">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-yellow-400 bg-gradient-to-br from-yellow-300 to-yellow-200 shadow-lg"
        >
          <span className="text-white text-lg font-bold">{achievement}</span>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
