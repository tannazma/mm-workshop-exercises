import BaseLayout from "@/components/baseLayout";
import ExerciseTailwindOneExercise from "@/components/exercise/exerciseTailwindOneExercise";
import ExerciseLabel from "@/components/exerciseLabel";
import Header from "@/components/header";
import ExerciseTailwindOneSolution from "@/components/solutions/exerciseTailwindOneSolution";
import exerciseMetaData from "@/data/files";
import Image from "next/image";
import Link from "next/link";

export default function ExerciseTailwindFive() {
  return (
    <BaseLayout>
      <Header
        image="/workshop-5.png"
        title="Exercise 5"
        subTitle={exerciseMetaData[5].title}
      />
      <div className="px-8 pb-8">
        <ExerciseLabel
          label="Exercise 5 - Your Code"
          description="Create a new page for this code in the Next.js project."
        />
        <ExerciseLabel
          label="Exercise 5 - Design"
          description="Create a login page based on the following design. Make sure to use the tailwind utility classes for styling. This design is based on the Shadcn component library."
        />
        <Link
          href="https://www.figma.com/file/cnW3dErCoBX2AZCsD20y4a/Shadcn?type=design&node-id=0%3A1&mode=design&t=w9wtjo5y54qrGvl6-1"
          target="_blank"
          className="underline text-sky-800 text-center w-full block"
        >
          👉 Checkout the Figma design here.
        </Link>
        <div className="relative w-full h-[800px] mt-12">
          <Image
            src="/exercise-tailwind-5.png"
            alt="Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </BaseLayout>
  );
}
