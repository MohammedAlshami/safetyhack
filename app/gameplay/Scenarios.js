export const actionsDict = {
  start: {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FScene1.1.mp4?alt=media",
    countdown: 10,
    isCorrect: true,
    actions: [
      { label: "Run and Get Help", next: "scenario0_wrong" },
      { label: "Inspect The Injury", next: "scenario2" },
    ],
  },

  scenario0_wrong: {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FScene2.1_Wrong.mp4?alt=media&token=a798cc5d-cf00-4405-8bfb-83a00a8fbddd",
    countdown: 20,
    isCorrect: false,
    actions: [
      { label: "Run and Get Help", next: "scenario2_wrong" },
      { label: "Inspect The Injury", next: "scenario2" },
    ],
  },
  scenario2: {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FScene2.1.mp4?alt=media&token=75e20cff-230c-412d-9e2d-477ffa8dffd1",
    countdown: 15,
    isCorrect: true,
    actions: [
      { label: "Bring The First Aid Kit", next: "scenario3" },
      { label: "Run Away", next: "scenario2_wrong" },
    ],
  },
  scenario2_wrong: {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FScene2.1_Wrong.mp4?alt=media&token=a798cc5d-cf00-4405-8bfb-83a00a8fbddd",
    countdown: 20,
    isCorrect: false,
    actions: [
      { label: "Bring The First Aid Kit", next: "scenario3" },
      { label: "Run Away", next: "scenario2_wrong" },
    ],
  },
  scenario3: {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Untitled%20video%20-%20Made%20with%20Clipchamp%20(1).mp4?alt=media&token=4487052c-ab64-4616-9720-23b560bb7fb9",
    countdown: 20,
    isCorrect: true,
    actions: [
      { label: "Pick Sanitizer A", next: "scenario4" },
      { label: "Pick Sanitizer B", next: "scenario3_wrong" },
    ],
  },
  scenario3_wrong: {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2Fanti.mp4?alt=media&token=6ad1b973-a456-4021-b69c-83b8ea8309c1",
    countdown: 20,
    isCorrect: false,
    actions: [
      { label: "Pick Sanitizer A", next: "scenario4" },
      { label: "Pick Sanitizer B", next: "scenario3_wrong" },
    ],
  },
  scenario4: {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2Fcorrect_anti%20(2).mp4?alt=media&token=173246e0-3656-4636-8f22-bd4ac4c12922",
    countdown: 20,
    isCorrect: true,
    actions: [
      { label: "Wrap the Wound", next: "end" },
      { label: "Leave it", next: "scenario2_wrong" },
    ],
  },
  scenario4_wrong: {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2Fanti.mp4?alt=media&token=6ad1b973-a456-4021-b69c-83b8ea8309c1",
    countdown: 20,
    isCorrect: false,
    actions: [
      { label: "Wrap the Wound", next: "end" },
      { label: "Leave it", next: "scenario2_wrong" },
    ],
  },
  general_wrong: {
    videoUrl: "general_wrong",
    countdown: 20,
    isCorrect: false,
    actions: [
      { label: "Pick the santiser", next: "scenario4" },
      { label: "Pour Water", next: "scenario4" },
    ],
  },
  end: {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FUntitled%20video%20-%20Made%20with%20Clipchamp%20(2).mp4?alt=media&token=b997d072-bf33-4be3-91c8-9921c79e7f38",
    actions: [],
  },
};
