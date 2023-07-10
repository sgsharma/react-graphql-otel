import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'

import { TodoResolver } from './resolvers/todoResolver'

async function main() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [TodoResolver],
    // Set to true to automatically create `schema.gql` file with schema
    emitSchemaFile: true,
  })

  const app = Express()
  // Create GraphQL server
  const server = new ApolloServer({
    schema,
  })
  
  await server.start()
  server.applyMiddleware({ app })

  app.listen(4000, () =>
    console.log('Server is running on http://localhost:4000/graphql')
  )
}

main()