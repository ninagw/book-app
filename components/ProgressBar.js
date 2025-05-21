import { useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

const ProgressBarWrapper = styled.div`
  position: relative;
  width: 60%;
  max-width: 400px;
  border-radius: 10px;
  margin: 0 auto;
`;

const ProgressBarFill = styled.div`
  height: 20px;
  border-radius: 8px;
  background-color: var(--background-color);
  width: ${(props) => props.$progresspercentage || 0}%;
`;

const ProgressBarText = styled.span`
  color: var(--text-color);
  font-weight: 400;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.15);
  background-color: rgb(0, 132, 114, 0.6);
  padding: 2px;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  inset: 0;
  position: fixed;
  background-color: rgba(49, 49, 49, 0.8);
  z-index: 5;
`;

const ProgressModalWindow = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  height: 250px;
  background-color: var(--background-color);
  border-radius: var(--border-radius);
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  gap: 10px;
`;

const StyledText = styled.h3`
  margin-bottom: 10px;
  margin-top: 5px;
`;

const StyledInput = styled.input`
  border: 1px solid var(--background-color);
  border-radius: var(--border-radius);
  padding: 4px;
  width: 60px;
  text-align: center;
  font-size: 16px;
`;

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: 30px 30px 15px 30px;
  width: fit-content;
  gap: 10px;
`;

const StyledButton = styled.button`
  font-size: var(--font-size-copy);  
  color: var(--text-color);
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  border: 1px solid var(--text-color);
  font-weight: 500;
  padding: 3px;
  margin: 5px;
  height: 40px;
  width: 100px;
`;

export default function ProgressBar({ pages, id }) {
  const [progressModal, setProgressModal] = useState(false);
  const [readingProgress, setReadingProgress] = useLocalStorageState(
    "readingProgress",
    { defaultValue: [{ progress: 0 }] }
  );

  function handleToggleProgressModal() {
    setProgressModal(!progressModal);
  }

  function handleSubmitProgress(event, id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (currentReadingProgress) {
      setReadingProgress(
        readingProgress.map((readingProgress_) =>
          readingProgress_ === currentReadingProgress
            ? { ...readingProgress_, progress: data.pageCount }
            : readingProgress_
        )
      );
    } else {
      setReadingProgress([
        ...readingProgress,
        { bookId: id, progress: data.pageCount },
      ]);
    }

    setProgressModal(false);
  }

  function cancelUpdateProgress() {
    setProgressModal(false);
  }

  const currentReadingProgress = readingProgress?.find((readingProgress_) => {
    return readingProgress_.bookId === id;
  });

  const progressPercentage = currentReadingProgress
    ? Math.round((currentReadingProgress.progress / pages) * 100)
    : 0;

  return (
    <>
      <ProgressBarWrapper onClick={handleToggleProgressModal}>
        <ProgressBarFill $progresspercentage={progressPercentage}>
          {currentReadingProgress ? (
            <ProgressBarText>
              Page {currentReadingProgress.progress}/{pages} -{" "}
              {progressPercentage}%
            </ProgressBarText>
          ) : (
            <ProgressBarText>Page 0/{pages} - 0%</ProgressBarText>
          )}
        </ProgressBarFill>
      </ProgressBarWrapper>
      {progressModal && (
        <Overlay>
          <ProgressModalWindow
            onSubmit={(event) => handleSubmitProgress(event, id)}
          >
            <StyledLabel htmlFor="pageCount">
              <StyledText>I am on page: </StyledText>
              <StyledInput
                type="number"
                id="pageCount"
                name="pageCount"
                min={0}
                max={pages}
                defaultValue={currentReadingProgress?.progress}
              ></StyledInput>
            </StyledLabel>
            <ButtonWrapper>
              <StyledButton type="submit">Save</StyledButton>
              <StyledButton type="button" onClick={cancelUpdateProgress}>
                Cancel
              </StyledButton>
            </ButtonWrapper>
          </ProgressModalWindow>
        </Overlay>
      )}
    </>
  );
}