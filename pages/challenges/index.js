import styled from "styled-components";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import AchievementList from "@/components/AchievementList";
import TrophyIcon from "@/components/Icons/TrophyIcon";
import { useAchievementStore } from "@/hooks/stores/achievementStore";
import {useLocalStorage} from "@/hooks/useLocalStorage";
import { useChallengeStore } from "@/hooks/useChallengeStore";

const StyledAchievementsScore = styled.p`
  // position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  color: var(--text-color);
`;

export default function ChallengesPage({}) {
  const { allChallenges } = useChallengeStore();
  const { allAchievements } = useAchievementStore();
  // const allAchievements = useAchievementStore((state) => state.allAchievements);
  // const updateAchievementCurrentAmount = useAchievementStore((state) => state.updateAchievementCurrentAmount);
  // const updatedAndUnlockedAchievements = useAchievementStore((state) => state.updatedAchievementsWithNewKeys);
  const solvedAchievements = allAchievements.filter((achievement) => achievement.unlocked);
  // updateAchievementCurrentAmount(achievement.id, amount); diese Funktion wird aufgerufen, um den Fortschritt eines Erfolgs zu aktualisieren.

  console.log("allAchievements: ", allAchievements);
  // console.log("updateAchievementCurrentAmount: ", updateAchievementCurrentAmount);
  // console.log("updatedAndUnlockedAchievements: ", updatedAndUnlockedAchievements);
  console.log("solvedAchievements: ", solvedAchievements);  

    return(
      <>
      <Header title={"Book Challenges"} />
      <main>
        <section>
          <StyledAchievementsScore href="/achievements" role="button" aria-label="View my achievements">
            <TrophyIcon />
            Achievements: {solvedAchievements.length} / {allAchievements.length}
            {/* {currentAmount}/{achievementGoal} */}
          </StyledAchievementsScore>
          <p>Create your own book challenges. Or have fun mastering the preinstalled achievements.</p>
          </section>
          <section>
                   {allAchievements.map((achievement) => (
                      <AchievementList
                        key={achievement.id}
                        name={achievement.name}
                        icon={achievement.icon}
                        description={achievement.description}
                        id={achievement.id}
                        unlocked={achievement.unlocked}
                      />
                    ))}
            </section>
      </main>
      <Navigation />
      </>
    )
}