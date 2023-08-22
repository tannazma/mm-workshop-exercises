import { motion } from "framer-motion";
import { z } from "zod";
import fs from "fs";
import Image from "next/image";
import path from "path";
import Link from "next/link";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import BaseLayout from "@/components/baseLayout";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/header";
import exerciseMetaData from "@/data/files";

interface File {
  href: string;
  title: string;
  image: string;
}

interface HomeProps {
  files: File[];
}

export default function Home({ files }: HomeProps) {
  return (
    <BaseLayout>
      <Header
        image="/header.png"
        title="The Workshop"
        subTitle="Tailwind CSS & ShadCN"
      />
      <div className="px-8 py-20">
        <ul className="grid grid-cols-6 gap-8">
          {files.map((file) => (
            <motion.li key={file.href} className="col-span-3">
              <motion.a
                href={file.href}
                className="rounded-2xl"
                variants={{
                  hover: {
                    scale: 1.2,
                    transition: {
                      when: "beforeChildren"
                    }
                  },
                  initial: {
                    scale: 1
                  }
                }}
                initial="initial"
                whileHover="hover"
              >
                <AspectRatio
                  ratio={16 / 9}
                  className="overflow-hidden rounded-2xl"
                >
                  <motion.div
                    className="bg-black absolute z-10 inset-0"
                    variants={{
                      hover: {
                        opacity: 0.4
                      },
                      initial: {
                        opacity: 0.6
                      }
                    }}
                  />
                  <Image
                    src={file.image}
                    alt="Image"
                    fill
                    className="rounded-md object-cover"
                  />
                  <motion.h3
                    className="relative z-50 flex justify-center items-center h-full text-white text-3xl sm:text-4xl font-extrabold tracking-tight dark:text-slate-50 p-16"
                    variants={{
                      hover: {
                        scale: 1.05,
                        top: -10
                      },
                      initial: {
                        scale: 1,
                        top: 0
                      }
                    }}
                  >
                    {file.title}
                  </motion.h3>
                </AspectRatio>
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
}

// This is a special function in Next.js called getStaticProps. It's used to fetch data at build time. This means that the data fetched will be used to generate a static page when you run the build command.
// (Open the `terms.md` file in the main folder of this project for an in-depth answer to the question: What is build time?)
// In our case, we want to generate a list of exercise files in our Next.js project. We'll use this list to create links to each exercise.
export async function getStaticProps() {
  // Here's what's happening in the rest of the function:
  // 1. We're defining a directory path. This is where we're looking for files.
  //    We're using path.join to create a path that works on any operating system.
  //    process.cwd() gives us the current working directory, and we're looking in "src/pages/tailwind".
  const directory = path.join(process.cwd(), "src/pages/exercises");

  // 2. We're using fs.readdirSync to read the contents of the directory we defined.
  //    This gives us an array of filenames.
  const filenames = fs.readdirSync(directory);

  // 3. Map over the array of filenames
  const files = filenames.map((filename) => {
    // Remove the '.tsx' extension from the filename to get the id as a string
    const idString = filename.replace(/\.tsx$/, "");

    // Parse the id string to an integer
    const idParsed = parseInt(idString);

    // If the parsed id is not a number, throw an error
    if (isNaN(idParsed)) throw new Error(`Invalid filename '${filename}'`);

    // Create a validator using zod to ensure the id is a number between 1 and the total number of files
    const validator = z.number().min(1).max(filenames.length);

    // Use the validator to parse the id
    const result = validator.safeParse(idParsed);

    // If the validation fails, throw an error
    if (!result.success) throw new Error(`Invalid filename '${filename}'`);

    // If the validation is successful, get the validated id
    const id = result.data;

    // Get the title of the exercise from the exerciseMetaData object using the id
    const title = exerciseMetaData[id].title;

    // Return an object with the href and title for each file
    return {
      href: `/exercises/${id}`,
      title: title,
      image: `/workshop-${id}.png`
    };
  });

  // 4. Finally, we're returning an object with a 'props' property.
  //    This 'props' object contains the 'files' array we just created.
  //    These props will be passed to our page component when it's rendered.
  return {
    props: {
      files
    }
  };
}
