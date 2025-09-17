import achievements from "@/lib/challenges.json";
import { useLocalStorage } from './useLocalStorage';
import { useState, useEffect } from 'react';

export const useChallengeStore = () => {
    const [challenges, setChallenges] = useLocalStorage("bookChallenges", achievements);
    const [readBooks, setReadBooks] = useLocalStorage("readBooks", []);

    // Create new challenge
    const createChallenge = (challengeData) => {
        const newChallenge = {
            id: "number",
            name: "string",
            description: "string",
            icon: "/assets/icons/trophy.png",
            achievementGoal: "number",
            currentAmount: 0,
            unlocked: false
        };

        setChallenges(prev => [...prev, newChallenge]);
        return newChallenge;
    };

    // Update challenge
    const updateChallenge = (challengeId, updates) => {
        setChallenges(prev =>
            prev.map(challenge => {
                if (challenge.id === challengeId) {
                    const updatedChallenge = { ...challenge, ...updates };

                    // Automatisch als completed markieren, wenn Ziel erreicht
                    if (updatedChallenge.current >= updatedChallenge.target && !updatedChallenge.isCompleted) {
                        updatedChallenge.isCompleted = true;
                        updatedChallenge.completedAt = new Date().toISOString();
                    }

                    return updatedChallenge;
                }
                return challenge;
            })
        );
    };

    // delete or complete challenge
    const deleteChallenge = (challengeId) => {
        setChallenges(prev => prev.filter(challenge => challenge.id !== challengeId));
    };

    // Compplete challenge
    const completeChallenge = (challengeId) => {
        updateChallenge(challengeId, {
            isCompleted: true,
            completedAt: new Date().toISOString()
        });
    };

    // Buch zur "Gelesen"-Liste hinzufügen
    const addReadBook = (book) => {
        const bookWithDate = {
            ...book,
            dateRead: book.dateRead || new Date().toISOString()
        };

        setReadBooks(prev => {
            // Prüfen ob Buch bereits existiert
            if (prev.some(b => b.id === book.id)) {
                return prev;
            }
            return [...prev, bookWithDate];
        });

        // Alle relevanten Challenges updaten
        updateChallengesForNewBook(bookWithDate);
    };

    // Challenges basierend auf neuem Buch updaten
    const updateChallengesForNewBook = (book) => {
        setChallenges(prev =>
            prev.map(challenge => {
                if (challenge.isCompleted) return challenge;

                switch (challenge.type) {
                    case 'books_read':
                        return {
                            ...challenge,
                            current: challenge.current + 1,
                            books: [...(challenge.books || []), book.id]
                        };

                    case 'pages_read':
                        const pages = book.pages || 0;
                        return {
                            ...challenge,
                            current: challenge.current + pages,
                            books: [...(challenge.books || []), book.id]
                        };

                    case 'genres':
                        // Annahme: book.genre ist ein String
                        if (book.genre && !challenge.books?.includes(book.id)) {
                            const uniqueGenres = new Set([
                                ...getGenresFromBooks(challenge.books || [], readBooks),
                                book.genre
                            ]);
                            return {
                                ...challenge,
                                current: uniqueGenres.size,
                                books: [...(challenge.books || []), book.id]
                            };
                        }
                        return challenge;

                    case 'authors':
                        if (book.author && !challenge.books?.includes(book.id)) {
                            const uniqueAuthors = new Set([
                                ...getAuthorsFromBooks(challenge.books || [], readBooks),
                                book.author
                            ]);
                            return {
                                ...challenge,
                                current: uniqueAuthors.size,
                                books: [...(challenge.books || []), book.id]
                            };
                        }
                        return challenge;

                    default:
                        return challenge;
                }
            }).map(challenge => {
                // Automatisch als completed markieren wenn Ziel erreicht
                if (challenge.current >= challenge.target && !challenge.isCompleted) {
                    return {
                        ...challenge,
                        isCompleted: true,
                        completedAt: new Date().toISOString()
                    };
                }
                return challenge;
            })
        );
    };

    // Hilfsfunktionen
    const getGenresFromBooks = (bookIds, allBooks) => {
        return bookIds
            .map(id => allBooks.find(book => book.id === id))
            .filter(book => book && book.genre)
            .map(book => book.genre);
    };

    const getAuthorsFromBooks = (bookIds, allBooks) => {
        return bookIds
            .map(id => allBooks.find(book => book.id === id))
            .filter(book => book && book.author)
            .map(book => book.author);
    };

    // Challenge-Statistiken
    const getChallengeStats = () => {
        const total = challenges.length;
        const completed = challenges.filter(c => c.isCompleted).length;
        const active = total - completed;

        return {
            total,
            completed,
            active,
            completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    };

    // Aktive Challenges abrufen
    const getActiveChallenges = () => {
        return challenges.filter(c => !c.isCompleted);
    };

    // Abgeschlossene Challenges abrufen
    const getCompletedChallenges = () => {
        return challenges.filter(c => c.isCompleted);
    };

    return {
        // State
        challenges,
        readBooks,

        // Challenge Management
        createChallenge,
        updateChallenge,
        deleteChallenge,
        completeChallenge,

        // Book Management
        addReadBook,

        // Getter
        getActiveChallenges,
        getCompletedChallenges,
        getChallengeStats,

        // Utils
        setChallenges,
        setReadBooks
    };
};
