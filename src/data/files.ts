// Define an interface for the exercise metadata. This is a mapping from a number (the exercise id) to an object containing the exercise's title.
interface ExerciseMetaData {
  [key: number]: {
    title: string;
  };
}

// Define the actual exercise metadata. This is an object where each key is an exercise id and the value is an object containing the exercise's title.
const exerciseMetaData: ExerciseMetaData = {
  1: {
    title: "Create a Steps Component with Tailwind CSS"
  },
  2: {
    title: "Create a Navigation Bar with Tailwind CSS"
  },
  3: {
    title: "Create a Startup Landing Page with Tailwind CSS"
  },
  4: {
    title: "Create a Blog with Tailwind CSS"
  },
  5: {
    title: "Create a login page with Shadcn & Tailwind CSS"
  },
  6: {
    title: "Create a dashboard page with Shadcn & Tailwind CSS"
  }
};

export default exerciseMetaData;
