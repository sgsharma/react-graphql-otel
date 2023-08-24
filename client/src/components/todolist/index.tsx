import * as React from 'react';
import { useTodoListQuery, useAddTodoMutation, TodoInput } from '../../generated/graphql';
import TodoList from './TodoList';
import HandleAddTodo from './AddTodo';
import { useApolloClient, gql } from '@apollo/client'; // Import useApolloClient hook

const TodoListContainer = () => {

  const { data, error, loading } = useTodoListQuery();
  const [addTodo] = useAddTodoMutation();
  const apolloClient = useApolloClient(); // Initialize Apollo Client
  
  // const handleTodoAdded = async (newTodo: TodoInput) => {
  //   try {

  //     const { data: newTodoData } = await addTodo({
  //       variables: newTodo,
  //     });

  //     console.log('New todo added:', newTodoData?.addTodo);

  //     // Update the cache with the new todo
  //     apolloClient.cache.modify({
  //       fields: {
  //         getTodos(existingTodos = []) {
  //           const newTodoRef = apolloClient.cache.writeFragment({
  //             data: newTodoData?.addTodo,
  //             fragment: gql`
  //               fragment NewTodo on Todo {
  //                 id
  //                 title
  //                 description
  //               }
  //             `,
  //           });
  //           return [...existingTodos, newTodoRef];
  //         },
  //       },
  //     });
  //   } catch (error) {
  //     console.error('Error adding todo:', error);
  //   }
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <div>
      <TodoList data={data} />
      <HandleAddTodo onTodoAdded={(newTodo) => console.log('New todo added:', newTodo)} />
      {/* <HandleAddTodo onTodoAdded=HandleAddTodo /> */}
    </div>
  );
};

export default TodoListContainer;
