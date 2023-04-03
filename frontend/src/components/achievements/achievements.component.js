import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Achievements = () => {
  const { character } = useSelector((state) => state.user);
  const { xp, level, wordsKnown, coins } = character.attributes;
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const calculateAchievements = () => {
      const newAchievements = [];

      
    for (let i = 2; i <= level; i++) {
      if (level >= i) {
        newAchievements.push(`Reached level ${i}`);
      };
    };

    const wordsAchievements = Math.floor(wordsKnown / 10);
    for (let i = 1; i <= wordsAchievements; i++) {
      newAchievements.push(`Learned ${i * 10} words`);
    };

    const coinsAchievements = Math.floor(coins / 100);
    for (let i = 1; i <= coinsAchievements; i++) {
      newAchievements.push(`Earned ${i * 100} coins`);
    };

    const xpAchievements = Math.floor(xp / 100);
    for (let i = 1; i <= xpAchievements; i++) {
      newAchievements.push(`Reached ${i * 1000} XP`);
    };

      setAchievements(newAchievements);
    };

    calculateAchievements();
  }, [xp, level, wordsKnown, coins]);


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