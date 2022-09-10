import type { IInteraction } from "~/ai";

export interface IScene {
  id: string;
  title?: string;
  description?: string;
  link?: {
    to: string;
    text: string;
  };
  interaction?: IInteraction;
}

export const getScene = (sceneId: IScene["id"]): IScene => {
  return (
    scenes.find(({ id }) => id === sceneId) || {
      id: "51469d55-8745-4b47-8981-5c81ea0578ff",
      description: "404 scene not found",
    }
  );
};

export const STARTING_SCENE_ID = "6762000e-e96e-4ad6-81f0-60364519137c";
export const scenes: IScene[] = [
  {
    id: STARTING_SCENE_ID,
    description: `The small town of Finchley has been attacked.
    
    Ash and smoke cover the skyline.`,
    link: { to: "/cb208d87-4101-4fe2-8d72-67b58c4e334b", text: "continue" },
  },
  {
    id: "cb208d87-4101-4fe2-8d72-67b58c4e334b",
    description: `Confused you enter a pub in front of you.
    It's empty, other than the barman who is distracted looking out of the window.`,
    link: { to: "/fa0807c7-304e-4b9e-9d09-b9d1a293797a", text: "continue" },
  },
  {
    id: "fa0807c7-304e-4b9e-9d09-b9d1a293797a",
    interaction: {
      type: "classification",
      classes: [
        {
          title: "talk to barman",
          action: {
            type: "changeScene",
            sceneId: "cb208d87-4101-4fe2-8d72-67b58c4e334b",
          },
        },
        {
          title: "attack barman",
          action: {
            type: "changeScene",
            sceneId: "cb208d87-4101-4fe2-8d72-67b58c4e334b",
          },
        },
        {
          title: "steal from pub",
          action: {
            type: "changeScene",
            sceneId: "cb208d87-4101-4fe2-8d72-67b58c4e334b",
          },
        },
        {
          title: "leave bar",
          action: {
            type: "changeScene",
            sceneId: "cb208d87-4101-4fe2-8d72-67b58c4e334b",
          },
        },
        {
          title: "other",
          action: {
            type: "changeScene",
            sceneId: "cb208d87-4101-4fe2-8d72-67b58c4e334b",
          },
        },
      ],
    },
  },
];

export const sceneIds = scenes.map(({ id }) => id) as [string, ...string[]];
