import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../services/api";

interface UserData {
  name: string;
  login: string;
  bio: string;
  company: string;
  followers: number;
  avatar_url: string;
  html_url: string;
}

interface IssueItem {
  id: number;
  title: string;
  body: string;
  comments: number;
  number: number;
  created_at: string;
  html_url: string;
  user: {
    login: string;
  };
}

interface Issues {
  items: IssueItem[];
  total_count: number;
}

interface GithubContextType {
  userData: UserData;
  issues: Issues;
  fetchRepositoryIssues: (query?: string) => Promise<void>;
}

interface GithubProviderProps {
  children: ReactNode;
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({ children }: GithubProviderProps) {
  const username = "rickyhideyukitakakura";
  const repository = "clone-tabnews";

  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [issues, setIssues] = useState<Issues>({} as Issues);

  const fetchUserData = useCallback(async () => {
    const response = await api.get(`/users/${username}`);

    setUserData(response.data);
  }, []);

  const fetchRepositoryIssues = useCallback(async (query?: string) => {
    if (!query) {
      query = "";
    }

    const response = await api.get(`/search/issues`, {
      params: {
        sort: "created",
        q: `${query} repo:${username}/${repository}`,
      },
    });

    setIssues(response.data);
  }, []);

  useEffect(() => {
    fetchUserData();
    fetchRepositoryIssues();
  }, [fetchRepositoryIssues, fetchUserData]);

  return (
    <GithubContext.Provider value={{ userData, issues, fetchRepositoryIssues }}>
      {children}
    </GithubContext.Provider>
  );
}
