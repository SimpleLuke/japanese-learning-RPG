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
        newAchievements.push(`${highestWordsAchievement} words`);
      }

      let highestXpAchievement = Math.floor(xp / 100) * 100;
      if (highestXpAchievement > 0) {
        newAchievements.push(`${highestXpAchievement}XP`);
      }

      setAchievements(newAchievements);
    };

    calculateAchievements();
  }, [xp, level, wordsKnown]);

  return (
    <div className="flex gap-4 pb-4 justify-center">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-[105px] h-[102px] rounded-full bg-achievement bg-cover shadow-lg"
        >
          <div className="text-gray-600 text-center text-sm font-bold pixel-font">
            {achievement}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
