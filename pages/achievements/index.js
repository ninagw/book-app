import { useAchievementStore } from "@/hooks/stores/achievementStore";
import Link from "next/link";
import ArrowBackIcon from "@/components/Icons/ArrowBackIcon";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 2;
  `;

  const StyledHeader = styled.header`
    margin: 20px 0;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledSection = styled.section`
  height: calc(100vh - 120px);
  overflow-y: auto;
`;

export default function Achievements({  }) {
  const { allAchievements } = useAchievementStore();
  console.log("Achievements data:", allAchievements)


  return (
    <>
      <StyledHeader>
        <StyledLink href={`/challenges`} role="button" aria-label="Back to my bookshelf"><ArrowBackIcon/></StyledLink>
        <h1>Achievements</h1>
      </StyledHeader>
      
      <main>
        <section>
          {allAchievements.map((achievement) => (
            <article
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
    </>
  );
}