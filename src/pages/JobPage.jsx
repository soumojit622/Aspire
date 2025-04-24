import { useUser } from "@clerk/clerk-react";
import MDEditor from "@uiw/react-md-editor";
import {
  Briefcase,
  DoorClosed,
  DoorOpen,
  Info,
  MapPin,
  Search,
} from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

import ApplicationCard from "@/components/application-card";
import { ApplyJobDrawer } from "@/components/apply-job";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getSingleJob, updateHiringStatus } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";

const JobPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob,
  } = useFetch(getSingleJob, {
    job_id: id,
  });

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded]);

  const { loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(
    updateHiringStatus,
    {
      job_id: id,
    }
  );

  const handleStatusChange = (value) => {
    const isOpen = value === "open";
    fnHiringStatus(isOpen).then(() => fnJob());
  };

  if (!isLoaded || loadingJob) {
    return <BarLoader className="mb-4" width={"100%"} color="#5853eb" />;
  }

  return (
    <div className="flex flex-col gap-8 mt-5 px-6 lg:px-16">
      {/* Job Title and Company Logo */}
      <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold pb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
          {job?.title}
        </h1>
        <img
          src={job?.company?.logo_url}
          className="h-16 md:h-20"
          alt={job?.title}
        />
      </div>

      {/* Job Info Section */}
      <div className="flex flex-wrap justify-between text-sm md:text-base text-gray-700 dark:text-gray-300 gap-4">
        <div className="flex items-center gap-2 text-gray-400">
          <MapPin className="text-gray-400" /> {job?.location}
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Briefcase className="text-gray-400" /> {job?.applications?.length}{" "}
          Applicants
        </div>
        <div className="flex items-center gap-2">
          {job?.isOpen ? (
            <span className="flex items-center gap-1 text-green-600 ">
              <DoorOpen className="text-green-600" /> Open
            </span>
          ) : (
            <span className="flex items-center gap-1 text-red-600 ">
              <DoorClosed className="text-red-600" /> Closed
            </span>
          )}
        </div>
      </div>

      {/* Status Update for Recruiter */}
      {job?.recruiter_id === user?.id && (
        <Select onValueChange={handleStatusChange}>
          <SelectTrigger
            className={`w-full ${job?.isOpen ? "bg-green-950" : "bg-red-950"}`}
          >
            <SelectValue
              placeholder={
                "Hiring Status " + (job?.isOpen ? "( Open )" : "( Closed )")
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      )}

      {/* Job Description */}
      <div className="mt-8">
        {/* About the Job Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <Info className="text-blue-500" /> About the job
          </h2>
          <p className="sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {job?.description}
          </p>
        </div>

        {/* What We Are Looking For Section */}
        <div className="mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <Search className="text-green-500" /> What we are looking for
          </h2>
          <MDEditor.Markdown
            source={job?.requirements}
            className="bg-transparent sm:text-lg text-gray-600 dark:text-gray-400"
          />
        </div>
      </div>

      {/* Apply Section (if not recruiter) */}
      {job?.recruiter_id !== user?.id && (
        <div className="mt-8">
          <ApplyJobDrawer
            job={job}
            user={user}
            fetchJob={fnJob}
            applied={job?.applications?.find(
              (ap) => ap.candidate_id === user.id
            )}
          />
        </div>
      )}

      {/* Loader for Hiring Status */}
      {loadingHiringStatus && (
        <div className="mt-4">
          <BarLoader width={"100%"} color="#5853eb" />
        </div>
      )}

      {/* Applications Section (if recruiter) */}
      {job?.applications?.length > 0 && job?.recruiter_id === user?.id && (
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="font-bold mb-4 text-xl ml-1 text-gray-800 dark:text-gray-200">
            Applications
          </h2>
          <div className="space-y-4">
            {job?.applications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPage;
