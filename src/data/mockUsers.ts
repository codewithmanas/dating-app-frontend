import { User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    age: 28,
    bio: 'Tech enthusiast & coffee addict',
    interests: ['coding', 'hiking', 'photography'],
    organizations: ['Tech Meetup', 'Hiking Club'],
    demographicTraits: {
      location: 'San Francisco, USA',
      gender: 'Male',
      ethnicity: 'Caucasian'
    },
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    age: 26,
    bio: 'Art lover & world traveler',
    interests: ['art', 'travel', 'photography'],
    organizations: ['Art Society', 'Travel Club'],
    demographicTraits: {
      location: 'New York, USA',
      gender: 'Female',
      ethnicity: 'Asian'
    },
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    age: 29,
    bio: 'Fitness junkie & foodie',
    interests: ['fitness', 'cooking', 'hiking'],
    organizations: ['Fitness Club', 'Cooking Class'],
    demographicTraits: {
      location: 'Los Angeles, USA',
      gender: 'Male',
      ethnicity: 'Hispanic'
    },
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    id: '4',
    name: 'Emma Wilson',
    age: 27,
    bio: 'Music lover & bookworm',
    interests: ['music', 'reading', 'travel'],
    organizations: ['Book Club', 'Music Society'],
    demographicTraits: {
      location: 'Chicago, USA',
      gender: 'Female',
      ethnicity: 'African-American'
    },
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];