import { gql } from '@apollo/client'

export const UPDATE_EMPLOYEE = gql`
    mutation UpdateEmployeeMutation($data:[EmployeesCreateManyInput!]!) {
        createManyEmployees(data :$data){
            count
            __typename
          }
    }
`