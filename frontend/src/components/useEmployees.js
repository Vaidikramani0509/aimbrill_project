import { useMutation } from "@apollo/client";
import { UpdateOneEmployeesDocument } from "../api/__generated__/graphql/graphql";

export const UseEmployees = () => {
    const [UpdateOneEmployee] = useMutation(UpdateOneEmployeesDocument, {
        refetchQueries: ["Employees"],
        awaitRefetchQueries: true,
    });

    return {
        UpdateOneEmployee
    };
};
