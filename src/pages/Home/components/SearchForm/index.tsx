import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import * as zod from "zod";
import { GithubContext } from "../../../../contexts/GithubContext";
import { SearchFormContainer } from "./styles";

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchRepositoryIssues = useContextSelector(GithubContext, (context) => {
    return context.fetchRepositoryIssues;
  });

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchRepositoryIssues(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchFormContainer>
  );
}
