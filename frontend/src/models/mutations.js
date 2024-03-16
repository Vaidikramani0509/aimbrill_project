import { gql } from '@apollo/client'

export const UPDATE_EMPLOYEE = gql`
    mutation UpdateEmployeeMutation($data:[EmployeesCreateManyInput!]!) {
        createManyEmployees(data :$data){
            count
            __typename
          }
    }
`
export const DELETE_ONE_EMPLOYEE = gql`
mutation ($where:EmployeesWhereUniqueInput!){
    deleteOneEmployees(where:$where){
      employeeid
    }
  }
`
export const UPDATE_ONE_EMPLOYEE = gql`
mutation updateOneEmployees ($data:EmployeesUpdateInput!  $where:EmployeesWhereUniqueInput!){
  updateOneEmployees(data:$data, where:$where){
    employeeid
    employeename
  }
}

`