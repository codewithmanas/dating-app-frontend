
export interface User {
    id: string;
    name: string;
    age: number;
    bio: string;
    interests: string[];
    organizations: string[];
    imageUrl: string;
    demographicTraits: {
      location: string;
      gender: string;
      ethnicity: string;
    }
  }
  
  export interface Match {
    userId: string;
    potentialMatches: User[];
    selectedUserId: string | null;
  }