import { User } from "../types";
import { mockUsers } from "../data/mockUsers";

export function findSimilarProfiles(
  originalUser: User,
  count: number = 3
): User[] {
  
  const otherUsers = mockUsers.filter((user) => user.id !== originalUser.id);

  return otherUsers
    .map((user) => ({
      user,
      score: calculateSimilarityScore(originalUser, user),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ user }) => user);
}

function calculateSimilarityScore(user1: User, user2: User): number {
  let score = 0;

  // Interest matching
  const commonInterests = user1.interests.filter((interest) =>
    user2.interests.includes(interest)
  );
  score += commonInterests.length * 2;

  // Organization matching
  const commonOrgs = user1.organizations.filter((org) =>
    user2.organizations.includes(org)
  );
  score += commonOrgs.length * 2;

  // Age similarity (closer = higher score)
  const ageDiff = Math.abs(user1.age - user2.age);
  score += Math.max(5 - ageDiff, 0);

  return score;
}

export function generatePotentialMatches(likedUser: User): User[] {
  // Find similar profiles
  const similarProfiles = findSimilarProfiles(likedUser);

  // Randomize the order of profiles including the original liked user
  const allProfiles = [likedUser, ...similarProfiles];
  return shuffleArray(allProfiles);
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
