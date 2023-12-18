const steps = [
  { id: "01", name: "Job details", status: "complete" },
  { id: "02", name: "Application form", status: "current" },
  { id: "03", name: "Preview", status: "upcoming" },
] as const;

const ExerciseTailwindOneExercise = () => {
  return (
    <nav>
      <ul className="flex items-center border rounded-l">
        {steps.map((step, stepIdx) => (
          <Step key={step.id} step={step} stepIdx={stepIdx} />
        ))}
      </ul>
    </nav>
  );
};

interface StepProps {
  step: {
    id: string;
    name: string;
    status: "complete" | "current" | "upcoming";
  };
  stepIdx: number;
}

const Step = ({ step, stepIdx }: StepProps) => {
  return (
    <li
      key={step.name}
      className="flex-row justify-center flex-1 border-l-2 p-4"
    >
      {step.status === "complete" ? (
        <span className="flex gap-5">
          <span className="h-8 w-8 bg-indigo-700 rounded-full grid place-items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </span>
          <span className="">{step.name}</span>
        </span>
      ) : step.status === "current" ? (
        <div className="flex items-center">
          <span className="mr-4">
            <span className="w-8 h-8 grid place-items-center border-2 rounded-full border-indigo-700">
              {step.id}
            </span>
          </span>
          <span className="">{step.name}</span>
        </div>
      ) : (
        <div className="flex items-center">
          <span className="mr-4">
            <span className="w-8 h-8 grid place-items-center border-2 rounded-full border-indigo-700">
              {step.id}
            </span>
          </span>
          <span className="">{step.name}</span>
        </div>
      )}

      {/* Separator */}
      {stepIdx !== steps.length - 1 ? (
        <>
          <div className="" />
        </>
      ) : null}
    </li>
  );
};

export default ExerciseTailwindOneExercise;
