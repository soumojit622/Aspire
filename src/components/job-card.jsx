/* eslint-disable react/prop-types */
import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/use-fetch";
import { deleteJob, saveJob } from "@/api/apiJobs";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const JobCard = ({
  job,
  savedInit = false,
  onJobAction = () => {},
  isMyJob = false,
}) => {
  const [saved, setSaved] = useState(savedInit);

  const { user } = useUser();

  const { loading: loadingDeleteJob, fn: fnDeleteJob } = useFetch(deleteJob, {
    job_id: job.id,
  });

  const {
    loading: loadingSavedJob,
    data: savedJob,
    fn: fnSavedJob,
  } = useFetch(saveJob, {
    alreadySaved: saved,
  });

  const handleSaveJob = async () => {
    await fnSavedJob({
      user_id: user.id,
      job_id: job.id,
    });
    onJobAction();
  };

  const handleDeleteJob = async () => {
    await fnDeleteJob();
    onJobAction();
  };

  useEffect(() => {
    if (savedJob !== undefined) setSaved(savedJob?.length > 0);
  }, [savedJob]);

  return (
    <Card className="flex flex-col shadow-md rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all">
      {loadingDeleteJob && (
        <BarLoader
          className="mt-2 rounded-t-xl"
          width={"100%"}
          color="#5853eb"
        />
      )}

      <CardHeader className="flex items-start justify-between p-4">
        <CardTitle className="text-lg font-bold gradient-title">
          {job.title}
        </CardTitle>
        {isMyJob && (
          <Trash2Icon
            fill="red"
            size={20}
            className="text-red-500 hover:text-red-600 transition cursor-pointer"
            onClick={handleDeleteJob}
          />
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-4 px-4 pb-2">
        <div className="flex items-center justify-between">
          {job.company?.logo_url && (
            <img
              src={job.company.logo_url}
              alt="Company Logo"
              className="h-6 w-auto object-contain"
            />
          )}
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
            <MapPinIcon size={14} className="text-indigo-400" />
            {job.location}
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        <p className="text-sm text-gray-700 dark:text-gray-300">
          {job.description.substring(0, job.description.indexOf("."))}.
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-b-xl shadow-md transition-all">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button
            variant="secondary"
            className="w-full py-2 px-6 text-sm font-semibold rounded-lg text-indigo-300 border border-indigo-500 hover:bg-indigo-600 hover:text-white transition-all focus:outline-none"
          >
            More Details
          </Button>
        </Link>

        {!isMyJob && (
          <Button
            variant="outline"
            onClick={handleSaveJob}
            disabled={loadingSavedJob}
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all focus:outline-none"
          >
            {saved ? (
              <Heart size={24} fill="red" stroke="red" />
            ) : (
              <Heart size={24} />
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;
