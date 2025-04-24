import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BarLoader, ClipLoader } from "react-spinners";
import { Briefcase, GraduationCap } from "lucide-react";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const navigateUser = (currRole) => {
    navigate(currRole === "recruiter" ? "/post-job" : "/jobs");
  };

  const handleRoleSelection = async (role) => {
    await user
      .update({ unsafeMetadata: { role } })
      .then(() => {
        console.log(`Role updated to: ${role}`);
        navigateUser(role);
      })
      .catch((err) => {
        console.error("Error updating role:", err);
      });
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigateUser(user.unsafeMetadata.role);
    }
  }, [user]);

  if (!isLoaded) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center transition-colors duration-700">
        <div className="p-8 rounded-full bg-white/30 dark:bg-white/10 shadow-2xl backdrop-blur-md animate-pulse">
          <ClipLoader size={55} color="#8b5cf6" />
        </div>
        <p className="mt-8 text-xl sm:text-2xl font-semibold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-purple-400 dark:to-pink-400 animate-fade-in">
          Setting things up just for you...
        </p>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-12 flex flex-col items-center justify-start transition-all duration-300 px-6">
      <h2 className="text-center text-4xl sm:text-6xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-500 bg-clip-text text-transparent pb-5">
        Let's get started!
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl">
        Who are you in this journey? Choose your role and unlock your
        experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <button
          onClick={() => handleRoleSelection("candidate")}
          className="flex items-center justify-center gap-4 p-8 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 text-white text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300"
        >
          <GraduationCap size={32} />
          Candidate
        </button>

        <button
          onClick={() => handleRoleSelection("recruiter")}
          className="flex items-center justify-center gap-4 p-8 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-600 dark:from-pink-400 dark:to-rose-500 text-white text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300"
        >
          <Briefcase size={32} />
          Recruiter
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
