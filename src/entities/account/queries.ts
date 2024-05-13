import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from "@/shared/api/generated";

const accountKey = ["account"];

export function useAccountQuery() {
  return useQuery({
    queryKey: accountKey,
    queryFn: accountControllerGetAccount,
  });
}

export function useUpdateAccountMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: accountControllerPatchAccount,
    async onSettled() {
      await queryClient.invalidateQueries(accountKey);
    },
    onSuccess(data) {
      queryClient.setQueriesData(accountKey, data);
    },
  });
}
