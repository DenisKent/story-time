interface IChangeScene {
  type: "changeScene";
  sceneId: string;
}

export type IInteractionResponse = IChangeScene;

export interface IInteraction {
  type: "classification";
  classes: { title: string; action: IInteractionResponse }[];
}

export const resolveInteraction = (
  userInput: string,
  interaction: IInteraction
): IInteractionResponse => {
  // if (interaction.type === "classification") {
  // }
  console.log("resolveInteraction", userInput);
  return interaction.classes[0].action;
};
