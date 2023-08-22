import BaseLayout from "@/components/baseLayout";
import ExerciseTailwindTwoExercise from "@/components/exercise/exerciseTailwindTwoExercise";
import ExerciseLabel from "@/components/exerciseLabel";
import Header from "@/components/header";
import ExerciseTailwindTwoSolution from "@/components/solutions/ExerciseTailwindTwoSolution";
import exerciseMetaData from "@/data/files";
import Image from "next/image";

export default function ExerciseTailwindTwo() {
  return (
    <BaseLayout>
      <Header
        image="/workshop-2.png"
        title="Exercise 2"
        subTitle={exerciseMetaData[2].title}
      />
      <div className="px-8 pb-8">
        <ExerciseLabel
          label="Exercise 2 - Design"
          description="Create a step navigation that looks like this design. Make sure to use the tailwind utility classes for styling."
        />
        <div className="relative w-full h-[75px]">
          <Image
            src="/exercise-tailwind-2.png"
            alt="Image"
            fill
            className="object-contain"
          />
        </div>

        <ExerciseLabel label="Exercise 2 - Your Code" />
        <ExerciseTailwindTwoExercise />

        <ExerciseLabel
          label="Exercise 2 - Solution"
          description="Uncomment the component in the exercise file to see the solution"
        />
        {/* <ExerciseTailwindTwoSolution /> */}
      </div>
    </BaseLayout>
  );
}
