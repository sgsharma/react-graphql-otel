import React, { useState } from 'react';
import { useAddTodoMutation, TodoInput, useTodoListQuery } from '../../generated/graphql'; // Import the generated GraphQL types and mutation/query hooks
import './styles.css';
import { useApolloClient } from '@apollo/client'; // Import useApolloClient hook

interface HandleAddTodoProps {
  onTodoAdded: (newTodo: TodoInput) => void;
}

const HandleAddTodo: React.FC<HandleAddTodoProps> = ({ onTodoAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const apolloClient = useApolloClient(); // Initialize Apollo Client

  const [addTodo, { loading, error }] = useAddTodoMutation();
  const { data: todoListData, refetch } = useTodoListQuery(); // Fetch the todo list data and get refetch function

  const handleAddTodo = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (title && description) {
      try {
        const todoInput: TodoInput = { title, description };

        const { data } = await addTodo({
          variables: todoInput,
        });

        if (data?.addTodo) {
          console.log('Todo added:', data.addTodo);
          onTodoAdded(todoInput);
          setTitle('');
          setDescription('');
          refetch(); // Refetch the todo list data using the refetch function
        }
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  return (
    <div className="App__input-container">
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default HandleAddTodo;

// import React, { useState } from 'react';
// import { useAddTodoMutation, TodoInput } from '../../generated/graphql'; // Import the generated GraphQL types and mutation hook
// import './styles.css';
// import { useApolloClient, gql } from '@apollo/client'; // Import useApolloClient hook


// interface HandleAddTodoProps {
//   onTodoAdded: (newTodo: TodoInput) => void;
// }

// const HandleAddTodo: React.FC<HandleAddTodoProps> = ({ onTodoAdded }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const apolloClient = useApolloClient(); // Initialize Apollo Client

//   const [addTodo, { loading, error }] = useAddTodoMutation();

//   const handleAddTodo = async () => {
//     if (title && description) {
//       try {
//         const todoInput: TodoInput = { title, description };

//         const { data } = await addTodo({
//           variables: todoInput,
//         });

//         if (data?.addTodo) {
//           console.log('Todo added:', data.addTodo);
//           onTodoAdded(todoInput);
//           setTitle('');
//           setDescription('');
//         }
//       } catch (error) {
//         console.error('Error adding todo:', error);
//       }
//     }
//   };

//   return (
//     <div className="App__input-container">
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add</button>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//     </div>
//   );
// };

// export default HandleAddTodo;
