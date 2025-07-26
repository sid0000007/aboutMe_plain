import Link from "next/link";
import Navigation from "./navigation";
import MainHeader from "./main-header";

export default function Component() {
  return (
    <div className="max-w-2xl mx-auto px-8 py-8">
      <Navigation />

      {/* Main Content */}
      <div className="max-w-2xl">
        {/* Header */}
        <MainHeader />

        {/* Bio Content */}
        <div className="space-y-6 text-gray-800 leading-relaxed text-xs">
          <p>
            I'm a full-stack developer passionate about building scalable
            solutions and innovative user experiences. I got my start when I was
            16 making websites for everyone I possibly could. I spent my
            childhood learning and building, from playing with code to becoming
            a professional developer.
          </p>

          <p>
            Currently working as a Fullstack Engineer at{" "}
            <Link
              href="https://cybership.io/"
              className="text-pink-400 hover:underline"
            >
              Cybership
            </Link>
            , where I build role-based permission systems and automated release
            pipelines. I'm also passionate about open-source development and
            have contributed to projects like{" "}
            <Link
              href="https://daccotta.com/"
              className="text-yellow-500 hover:underline"
            >
              Daccotta
            </Link>
            .
          </p>

          <p>
            I'm a{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              USICT, IP University
            </Link>{" "}
            student pursuing Computer Science Engineering. I moved to Delhi in
            2022 and have been actively involved in the tech community since
            then.
          </p>
        </div>
      </div>
    </div>
  );
}
