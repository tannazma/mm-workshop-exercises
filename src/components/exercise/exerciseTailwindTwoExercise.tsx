import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false }
];

export default function ExerciseTailwindTwoExercise() {
  return (
    <nav className="">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="">
              <div className="">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="">
            {/* Profile dropdown */}
            <div className="">
              <Image
                className=""
                height={32}
                width={32}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile Picture"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
