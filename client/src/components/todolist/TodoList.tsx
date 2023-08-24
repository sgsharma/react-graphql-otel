import * as React from 'react';
import { TodoListQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: TodoListQuery;
}

const className = 'TodoList';

const TodoList: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>To Do List</h3>
    <div className={`${className}__list`}>
      {!!data.getTodos &&
        data.getTodos.map((getTodos) =>
          !!getTodos ? (
            console.log('getTodos', getTodos),
            <div key={getTodos.id} className={`${className}__item Card`}>
              <h4 className="Card__title">{getTodos.title}</h4>
              <p className="Card__description">{getTodos.description}</p>
            </div>
          ) : null
        )}
    </div>
  </div>
);

export default TodoList;
