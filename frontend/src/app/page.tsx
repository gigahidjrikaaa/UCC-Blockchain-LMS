import Image from "next/image";
import Link from "next/link";
import { 
  LuBook, 
  LuClock, 
  LuArrowRight, 
  LuTrophy, 
  LuArmchair, 
  LuCalendar
} from "react-icons/lu";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Student</h1>
            <p className="text-blue-100">Continue your blockchain journey where you left off</p>
          </div>
          <div className="mt-4 md:mt-0 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <LuArmchair className="h-5 w-5" />
              <div>
                <p className="text-sm font-medium">Your progress</p>
                <div className="flex items-center">
                  <div className="text-xl font-bold">64%</div>
                  <span className="text-xs ml-2 text-blue-200">+5% this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Continue Learning Section - Wider Card */}
        <section className="md:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Continue Learning</h2>
            <Link href="/courses/my-courses" className="text-blue-600 dark:text-blue-400 flex items-center text-sm font-medium">
              View all courses <LuArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {[1, 2].map((_, i) => (
              <Link href={`/courses/course-${i + 1}`} key={i} className="flex p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div className="h-16 w-16 rounded-md bg-slate-200 dark:bg-slate-700 flex-shrink-0 relative overflow-hidden">
                  <Image 
                    src={`/course-${i + 1}.jpg`} 
                    alt="Course thumbnail"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="font-medium">
                    {i === 0 ? "Blockchain Fundamentals" : "Smart Contract Development"}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-slate-600 dark:text-slate-400 text-sm">
                    <LuBook className="h-4 w-4" /> 
                    <span>
                      {i === 0 ? "Module 3: Consensus Mechanisms" : "Module 2: Solidity Basics"}
                    </span>
                  </div>
                  <div className="mt-2 w-full bg-slate-200 dark:bg-slate-600 rounded-full h-1.5">
                    <div 
                      className="bg-blue-600 h-1.5 rounded-full" 
                      style={{ width: i === 0 ? '65%' : '42%' }}
                    ></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Upcoming Deadlines */}
        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden h-fit">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold">Upcoming Deadlines</h2>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {[
              { course: "Blockchain Fundamentals", task: "Quiz: Blockchain Basics", date: "Tomorrow, 11:59 PM" },
              { course: "Smart Contract Development", task: "Assignment: Simple Token", date: "Mar 29, 11:59 PM" }
            ].map((item, i) => (
              <div key={i} className="p-4">
                <div className="flex items-start">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
                    <LuClock className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{item.task}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.course}</p>
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1 font-medium">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recommended Courses */}
        <section className="md:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold">Recommended For You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
            {[
              { title: "DApp Development", level: "Intermediate", modules: 8, img: "/course-3.jpg" },
              { title: "Blockchain Security", level: "Advanced", modules: 6, img: "/course-4.jpg" }
            ].map((course, i) => (
              <Link href={`/courses/recommended-${i}`} key={i} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex">
                <div className="h-20 w-20 rounded-md bg-slate-200 dark:bg-slate-700 flex-shrink-0 relative overflow-hidden">
                  <Image 
                    src={course.img} 
                    alt={course.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">{course.title}</h3>
                  <div className="flex flex-col gap-1 mt-1 text-slate-600 dark:text-slate-400 text-sm">
                    <p>Level: {course.level}</p>
                    <p>{course.modules} modules</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Achievements & Events Combined Section */}
        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {/* Achievements */}
            <div>
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-semibold">Recent Achievements</h2>
              </div>
              <div className="p-4 flex items-center">
                <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                  <LuTrophy className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">First Smart Contract</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Completed your first Solidity project</p>
                </div>
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div>
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-semibold">Upcoming Events</h2>
              </div>
              <div className="p-4">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <LuCalendar className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Blockchain Workshop</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Mar 30, 2:00 PM - Online</p>
                    <Link href="/events" className="text-blue-600 dark:text-blue-400 text-sm flex items-center mt-1">
                      Register <LuArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}