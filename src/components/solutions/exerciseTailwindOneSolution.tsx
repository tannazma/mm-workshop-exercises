const steps = [
  { id: "01", name: "Job details", status: "complete" },
  { id: "02", name: "Application form", status: "current" },
  { id: "03", name: "Preview", status: "upcoming" }
] as const;

const ExerciseTailwindOneSolution = () => {
  return (
    <nav>
      <ul className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
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
    <li key={step.name} className="relative md:flex md:flex-1">
      {step.status === "complete" ? (
        <span className="flex items-center px-6 py-4 text-sm font-medium">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </span>
          <span className="ml-4 text-sm font-medium text-gray-900">
            {step.name}
          </span>
        </span>
      ) : step.status === "current" ? (
        <div className="flex items-center px-6 py-4 text-sm font-medium">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
            <span className="text-indigo-600">{step.id}</span>
          </span>
          <span className="ml-4 text-sm font-medium text-indigo-600">
            {step.name}
          </span>
        </div>
      ) : (
        <div className="group flex items-center">
          <span className="flex items-center px-6 py-4 text-sm font-medium">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 ">
              <span className="text-gray-500 ">{step.id}</span>
            </span>
            <span className="ml-4 text-sm font-medium text-gray-500 ">
              {step.name}
            </span>
          </span>
        </div>
      )}

      {/* Separator */}
      {stepIdx !== steps.length - 1 ? (
        <>
          <div className="absolute right-0 top-0 hidden h-full w-5 md:block border-r border-gray-300" />
        </>
      ) : null}
    </li>
  );
};

export default ExerciseTailwindOneSolution;
