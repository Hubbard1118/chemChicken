const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
  elements: [Element]
}

type Auth {
  token: ID!
  user: User
}

type Element {
  _id: ID!
  name: String
  symbol: String
  atomicNumber: Float
  atomicMass: String
  category: String
  group: Float
  period: Float
  block: String
  electronConfiguration: String
  electronegativity: Float
  image: String
  compounds: [Compound]
}

input ElementInput {
  _id: ID!
  name: String
  symbol: String
  atomicNumber: Float
  atomicMass: String
  category: String
  group: Float
  period: Float
  block: String
  electronConfiguration: String
  electronegativity: Float
  image: String
}

type Compound {
  name: String
  formula: String
  molecularWeight: Float
}

type Query {
  users: [User]!
  user: User
  elements: [Element]
  element(name: String!): Element
  compounds: [Compound]
  compound(name:String!): Compound
  me: User
}


type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  savedElements(elementData: ElementInput): User
  deleteElement(elementId: ID! ): User
}
`;

module.exports = typeDefs;
