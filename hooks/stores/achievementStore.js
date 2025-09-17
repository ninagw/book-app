import achievements from "@/lib/challenges.json";
import { create } from "zustand";
import {useLocalStorage} from "@/hooks/useLocalStorage";

const initialAchievements = achievements.map((achievement) => {
    return { id: achievement.id, name: achievement.name, description: achievement.description, icon: achievement.icon, achievementGoal: achievement.achievementGoal, currentAmount: achievement.currentAmount, unlocked: achievement.unlocked};
  });

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
            console.log("Achievement ID:", id);
            console.log("Current Amount:", achievement.currentAmount);
            console.log("Achievement Goal:", achievement.achievementGoal);
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