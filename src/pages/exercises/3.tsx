import BaseLayout from "@/components/baseLayout";
import ExerciseTailwindOneExercise from "@/components/exercise/exerciseTailwindOneExercise";
import ExerciseLabel from "@/components/exerciseLabel";
import Header from "@/components/header";
import ExerciseTailwindOneSolution from "@/components/solutions/exerciseTailwindOneSolution";
import exerciseMetaData from "@/data/files";
import Image from "next/image";
import Link from "next/link";

export default function ExerciseTailwindThree() {
  return (
    <BaseLayout>
      <Header
        image="/workshop-3.png"
        title="Exercise 3"
        subTitle={exerciseMetaData[3].title}
      />
      <div className="px-8 pb-8">
        <ExerciseLabel
          label="Exercise 3 - Your Code"
          description="Create a new page for this code in the Next.js project."
        />
        <ExerciseLabel
          label="Exercise 3 - Design"
          description="Create a landing page based on the following design. Make sure to use the tailwind utility classes for styling. This design is from the free Next.js & Tailwind CSS Landing Page Template Nextly."
        />
        <Link
          href="https://nextly.web3templates.com/"
          target="_blank"
          className="underline text-sky-800 text-center w-full block"
        >
          👉 Checkout the live landing page here.
        </Link>
        <Link
          href="https://github.com/web3templates/nextly-template/"
          target="_blank"
          className="underline text-sky-800 text-center w-full block mt-2"
        >
          👉 Download the code from GitHub here.
        </Link>
        <div className="relative w-full h-[2000px] mt-12">
          <Image
            src="/exercise-tailwind-3.png"
            alt="Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </BaseLayout>
  );
}
