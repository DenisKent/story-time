export const gql = String.raw;

export const typeDefs = gql`
  type Scene {
    id: ID! @id
    name: String!
    title: String
    description: String
    automaticProgression: AutomaticProgression
      @relationship(type: "PROGRESSES_USING", direction: OUT)
  }
  type AutomaticProgression {
    id: ID! @id
    progression_delay_in_ms: Int!
    scene: Scene! @relationship(type: "PROGRESSES_TO", direction: OUT)
  }
`;
