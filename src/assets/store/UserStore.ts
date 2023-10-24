import { create } from 'zustand';
import { GetUserModelDto } from '../../schemas/Interfaces';

// Define the UserStore state interface
interface UserStoreState {
  user: GetUserModelDto | null;
  setUser: (user: GetUserModelDto | null) => void;
}

// Initial state with user set to null
const initialState: UserStoreState = {
  user: null,
  setUser: (user) => {}
};

// Create the UserStore using Zustand
export const useUserStore = create<UserStoreState>((set) => ({
  ...initialState,
  setUser: (user: GetUserModelDto | null) => set({ user })
}));
