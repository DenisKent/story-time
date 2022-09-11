# Story time

## Setup

- install neo4j desktop
- install the neo4j APOC plugin
- npm install

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Changing the db

- Add to architecture diagram
- Add to `app\datastore\schema.ts`
- run `npm run script:store:codegen`

### Architecture

```mermaid
erDiagram
    Scene {
        string name
        string title
        string description
    }
    AutomaticProgression {
        int progressionDelayInMs
    }
    UserInput {
        string type
        string label
    }
    model{

    }

    Scene ||--o| AutomaticProgression: PROGRESSES_USING
    AutomaticProgression ||--|| Scene: PROGRESSES_TO
    Scene ||--o{ UserInput: PROGRESSES_USING
    UserInput||--o|Scene: PROGRESSES_TO

    UserInput ||--o| model: feeds_into
    model ||--|{ scene: PROGRESSES_TO
```
