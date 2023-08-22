import BaseLayout from "@/components/baseLayout";
import ExerciseTailwindOneExercise from "@/components/exercise/exerciseTailwindOneExercise";
import ExerciseLabel from "@/components/exerciseLabel";
import Header from "@/components/header";
import ExerciseTailwindOneSolution from "@/components/solutions/exerciseTailwindOneSolution";
import exerciseMetaData from "@/data/files";
import Image from "next/image";

export default function ExerciseTailwindOne() {
  return (
    <BaseLayout>
      <Header
        image="/workshop-1.png"
        title="Exercise 1"
        subTitle={exerciseMetaData[1].title}
      />
      <div className="px-8 pb-8">
        <ExerciseLabel
          label="Exercise 1 - Design"
          description="Create a step navigation that looks like this design. Make sure to use the tailwind utility classes for styling."
        />
        <div className="relative w-full h-[75px]">
          <Image
            src="/exercise-tailwind-1.png"
            alt="Image"
            fill
            className="object-contain"
          />
        </div>

        <ExerciseLabel label="Exercise 1 - Your Code" />
        <ExerciseTailwindOneExercise />

        <ExerciseLabel
          label="Exercise 1 - Solution"
          description="Uncomment the component in the exercise file to see the solution"
        />
        {/* <ExerciseTailwindOneSolution /> */}
      </div>
    </BaseLayout>
  );
}
