import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { Todo, TodoInput } from '../schemas/Todo'

// Resolver that returns a Todo
@Resolver((of) => Todo)
export class TodoResolver {
  private todos: Todo[] = []
  
  // Query to get all Todos
  @Query((returns) => [Todo], { nullable: true })
  async getTodos(): Promise<Todo[]> {
    return await this.todos
  }

  // Mutation to add a Todo
  @Mutation((returns) => Todo)
  async addTodo(
    @Arg('todoInput') { title, description }: TodoInput
  ): Promise<Todo> {
    const todo = {
      id: Math.random(), // not really unique
      title,
      description,
      status: false,
    }

    await this.todos.push(todo)
    return todo
  }
}
