import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Todo;
};


export type MutationAddTodoArgs = {
  todoInput: TodoInput;
};

export type Query = {
  __typename?: 'Query';
  getTodos?: Maybe<Array<Todo>>;
};

export type Todo = {
  __typename?: 'Todo';
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  status: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type TodoInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type TodoListQueryVariables = Exact<{ [key: string]: never; }>;


export type TodoListQuery = { __typename?: 'Query', getTodos?: Array<{ __typename?: 'Todo', id: number, title: string, description: string, status: boolean }> | null };

export type AddTodoMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description: Scalars['String']['input'];
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo: { __typename?: 'Todo', id: number, title: string, description: string, status: boolean } };


export const TodoListDocument = gql`
    query TodoList {
  getTodos {
    id
    title
    description
    status
  }
}
    `;

/**
 * __useTodoListQuery__
 *
 * To run a query within a React component, call `useTodoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodoListQuery(baseOptions?: Apollo.QueryHookOptions<TodoListQuery, TodoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodoListQuery, TodoListQueryVariables>(TodoListDocument, options);
      }
export function useTodoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodoListQuery, TodoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodoListQuery, TodoListQueryVariables>(TodoListDocument, options);
        }
export type TodoListQueryHookResult = ReturnType<typeof useTodoListQuery>;
export type TodoListLazyQueryHookResult = ReturnType<typeof useTodoListLazyQuery>;
export type TodoListQueryResult = Apollo.QueryResult<TodoListQuery, TodoListQueryVariables>;
export const AddTodoDocument = gql`
    mutation AddTodo($title: String!, $description: String!) {
  addTodo(todoInput: {title: $title, description: $description}) {
    id
    title
    description
    status
  }
}
    `;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;