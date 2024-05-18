export const actionsDict = {
    start: {
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FScene1.1.mp4?alt=media",
      countdown: 10,
      isCorrect: true,
      actions: [
        { label: "Runnnn", next: "scenario2_wrong" },
        { label: "Inspect The Injury", next: "scenario2" },
        { label: "Panic and cry", next: "scenario1" },
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
        { label: "End", next: "end" },
      ],
    },
    scenario2_wrong: {
        videoUrl:
          "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FScene2.1_Wrong.mp4?alt=media&token=a798cc5d-cf00-4405-8bfb-83a00a8fbddd",
        countdown: 20,
        isCorrect: false,
        actions: [
          { label: "Go to Scenario 4", next: "scenario4" },
          { label: "find water and pour it instead", next: "general_wrong" },
        ],
      },
      scenario3: {
        videoUrl:
          "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FScene3.1.mp4?alt=media&token=dba11366-b88f-4058-ac9b-efe1324e53d3",
        countdown: 20,
        isCorrect: true,
        actions: [
          { label: "Pick sanitizer A", next: "scenario4" },
          { label: "Pick sanitizer B", next: "scenario4_wrong" },
        ],
      },
      scenario4: {
        videoUrl:
          "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FScene4.1.mp4?alt=media&token=ff4da314-f1d1-453e-84f0-775a4b2b21d6",
        countdown: 20,
        isCorrect: true,
        actions: [
          { label: "Pick Cotton", next: "scenario5" },
          { label: "find water and pour it instead", next: "general_wrong" },
        ],
      },
      scenario4_wrong: {
        videoUrl:
          "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FScene4_right.mp4?alt=media&token=e591226b-7775-43b3-bb61-c98d80d60929",
        countdown: 20,
        isCorrect: false,
        actions: [
          { label: "Pick the santiser", next: "scenario4" },
          { label: "find water and pour it instead", next: "scenario4" },
        ],
      },
      scenario5: {
        videoUrl:
          "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FScene4.1.mp4?alt=media&token=ff4da314-f1d1-453e-84f0-775a4b2b21d6",
        countdown: 20,
        isCorrect: true,
        actions: [
          { label: "Pick the santiser", next: "end" },
          { label: "find water and pour it instead", next: "scenario4" },
        ],
      },  
      general_wrong: {
        videoUrl:
          "general_wrong",
        countdown: 20,
        isCorrect: false,
        actions: [
          { label: "Pick the santiser", next: "scenario4" },
          { label: "find water and pour it instead", next: "scenario4" },
        ],
      },
    end: {
      videoUrl:
        "https://firebasestorage.googleapis.com/v0/b/realtimedatabasetest-f226a.appspot.com/o/Scenes%2FEnding.mp4?alt=media",
      actions: [],
    },
  };