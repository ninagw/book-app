import styled from "styled-components";
import TrophyIcon from "@/components/Icons/TrophyIcon";
import { useRouter } from "next/router";

const StyledAchievementArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--text-color);
  border-radius: var(--border-radius);
  width: 80vw;
  margin: 10px;
  padding-right: 10px;
  color: ${(unlocked) =>
    unlocked ? "var(--text-color)" : "var(--text-color)"};
  background-color: ${(unlocked) =>
    unlocked ? "var(--lightgrey-color)" : "var(--lightgrey-color)"};
`;

const StyledAchievementText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
`;

const StyledImageWrapper = styled.div`
  padding-left: 10px;
`;
const StyledTextWrapper = styled.div`
  align-content: center;
  height: fit-content;
`;

const StyledName = styled.h3`
  margin-bottom: 0;
`;

export default function Achievement({
  id,
  name,
  icon,
  description,
  unlocked,
}) {
  const router = useRouter();

  return (
    <StyledAchievementArticle
      key={id}
      // onClick={() => router.push(`/achievements/${id}`)}
    >
      <StyledImageWrapper>
        {/* {unlocked && (<TrophyIcon />)}  */}
        {/* <Image
          src={unlocked ? icon : "/assets/icons/trophy-grey.png"}
          alt={name}
          width={50}
          height={50}
        /> */}
        {unlocked ? (
          <TrophyIcon />
            ) : (
                  <TrophyIcon />
                )}
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledName>{name}</StyledName>
        <StyledAchievementText>{description}</StyledAchievementText>
      </StyledTextWrapper>
    </StyledAchievementArticle>
  );
}