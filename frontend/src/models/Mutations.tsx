import { gql } from '@apollo/client'

export const UPDATE_EMPLOYEE = gql`
    mutation UpdateMediaLabelMutation($data:[EmployeesCreateManyInput!]!) {
        createManyEmployees(data :$data){
            count
            __typename
          }
    }
`