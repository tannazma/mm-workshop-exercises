import BaseLayout from "@/components/baseLayout";
import ExerciseTailwindSevenExercise from "@/components/exercise/ExerciseTailwindSevenExercise";
import ExerciseLabel from "@/components/exerciseLabel";
import Header from "@/components/header";
import ExerciseTailwindSevenSolution from "@/components/solutions/ExerciseTailwindSevenSolution";
import ExerciseTailwindOneSolution from "@/components/solutions/exerciseTailwindOneSolution";
import exerciseMetaData from "@/data/files";
import Image from "next/image";
import Link from "next/link";

export default function ExerciseTailwindSeven() {
  return (
    <BaseLayout>
      <Header
        image="/workshop-7.png"
        title="Exercise 7"
        subTitle={exerciseMetaData[7].title}
      />
      <div className="px-8 pb-8">
        <ExerciseLabel
          label="Exercise 7 - Your Code"
          description="We've added a UI element to increase and decrease the steps. Now it is your turn to add the animations with Framer Motion. You can use the final result as a reference."
        />
        <ExerciseTailwindSevenExercise />

        <ExerciseLabel label="Exercise 7 - Final Result" />
        <ExerciseTailwindSevenSolution />
      </div>
    </BaseLayout>
  );
}
