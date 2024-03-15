import { useMutation } from "@apollo/client";
import { CreatemanyemplyeDocument } from "../api/__generated__/graphql/graphql";

export const useEmployees = () => {
    const [UpdateManyEmployee] = useMutation(CreatemanyemplyeDocument, {
        refetchQueries: ["Employees"],
        awaitRefetchQueries: true,
    });

    return {
        UpdateManyEmployee
    };
};
