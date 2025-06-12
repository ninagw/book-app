import achievements from "@/lib/achievements";
import { create } from "zustand";

// const initialAchievements = achievements.map((achievement) => {
//     return { id: achievement.id, name: achievement.name, description: achievement.description, achievementGoal: achievement.achievementGoal, currentAmount: 0, unlocked: false};
//   });

export const useAchievementStore = create((set) => ({
  allAchievements: achievements,

  // setAllAchievements ersetzt die Liste der Erfolge komplett mit einer neuen.
  setAllAchievements: (newAchievements) => {
    set({ allAchievements: newAchievements });
  },

  // updateAchievementsWithNewKeys fügt neue Erfolge hinzu, falls sie noch nicht in der Liste sind.
  updatedAchievementsWithNewKeys: () => {
    set((state) => ({
      allAchievements: [
        ...state.allAchievements,
        ...achievements.filter(
          (achievement) =>
            !state.allAchievements.some((item) => item.id === achievement.id)
        ),
      ],
    }));
  },

  // updateAchievementCurrentAmount erhöht den Fortschritt eines bestimmten Erfolgs. Wenn neuer Wert größer oder gleich von achievementGoal wird, Erfolg freigeschaltet (unlocked: true).
  updateAchievementCurrentAmount: (id, amount) => {
    set((state) => {
      const updatedAchievements = state.allAchievements.map((achievement) =>
        achievement.id === id
          ? {
              ...achievement,
              currentAmount: achievement.currentAmount + amount,
            }
          : achievement
      );

      const updatedAndUnlockedAchievements = updatedAchievements.map(
        (achievement) => {
          if (
            achievement.id === id &&
            achievement.currentAmount >= achievement.achievementGoal
          ) {
            return {
              ...achievement,
              unlocked: true,
            };
          }
          return achievement;
        }
      );
      return { allAchievements: updatedAndUnlockedAchievements };
    });
  },
}));