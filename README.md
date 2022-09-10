# Story time

## Setup

- install neo4j desktop
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

### Architecture

```mermaid
erDiagram
    scene {
        string title
        string description
    }
    automatic_progression {
        int progression_delay_in_ms
    }
    user_input {
        string type
        string label
    }
    model{

    }

    scene ||--o| automatic_progression: progresses_using
    automatic_progression ||--|| scene: progresses_to
    scene ||--o{ user_input: progresses_using
    user_input||--o|scene: progresses_to

    user_input ||--o| model: feeds_into
    model ||--|{ scene: progresses_to
```
