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
    <div className="flex flex-col gap-4">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="w-32 h-32 rounded-full border-4 border-gray-800 border-dashed border-opacity-50 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-lg px-8 py-6 text-gray-900 font-bold text-center text-lg tracking-wide"
        >
          {achievement}
        </div>
      ))}
    </div>
  );
};

export default Achievements;
