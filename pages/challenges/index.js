import styled from "styled-components";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import TrophyIcon from "@/components/Icons/TrophyIcon";
import Link from "next/link";
import { useAchievementStore } from "@/hooks/stores/achievementStore";

const StyledSection = styled.section`
  color: var(--text-color);
`;

const StyledAchievementsLink = styled(Link)`
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
  const allAchievements = useAchievementStore((state) => state.allAchievements);
  const updateAchievementCurrentAmount = useAchievementStore(
    (state) => state.updateAchievementCurrentAmount
  );
  const solvedAchievements = allAchievements.filter(
    (achievement) => achievement.unlocked
  );

    return(
      <>
      <Header title={"Book Challenges"} />
      <main>
       <StyledSection>
          <StyledAchievementsLink href="/achievements" role="button" aria-label="View my achievements">
            <TrophyIcon />
            {solvedAchievements.length} / {allAchievements.length}
          </StyledAchievementsLink>
       </StyledSection>
      </main>
      <Navigation />
      </>
    )
}