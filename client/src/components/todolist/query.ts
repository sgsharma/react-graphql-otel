import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query TodoList {
    getTodos {
      id
      title
      description
      status
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($title: String!, $description: String!) {
    addTodo(todoInput: { title: $title, description: $description }) {
      id
      title
      description
      status
    }
  }
`;
