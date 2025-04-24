import { getCompanies } from "@/api/apiCompanies";
import { addNewJob } from "@/api/apiJobs";
import AddCompanyDrawer from "@/components/add-comapny-drawer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Building2, ListTodo, Upload, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { State } from "country-state-city";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  location: z.string().min(1, { message: "Select a location" }),
  company_id: z.string().min(1, { message: "Select or Add a new Company" }),
  requirements: z.string().min(1, { message: "Requirements are required" }),
});

const PostJob = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { location: "", company_id: "", requirements: "" },
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingCreateJob,
    error: errorCreateJob,
    data: dataCreateJob,
    fn: fnCreateJob,
  } = useFetch(addNewJob);

  const onSubmit = (data) => {
    fnCreateJob({
      ...data,
      recruiter_id: user.id,
      isOpen: true,
    });
  };

  useEffect(() => {
    if (dataCreateJob?.length > 0) navigate("/jobs");
  }, [loadingCreateJob]);

  const {
    loading: loadingCompanies,
    data: companies,
    fn: fnCompanies,
  } = useFetch(getCompanies);

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  if (!isLoaded || loadingCompanies) {
    return <BarLoader className="mb-4" width={"100%"} color="#5853eb" />;
  }

  if (user?.unsafeMetadata?.role !== "recruiter") {
    return <Navigate to="/jobs" />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="gradient-title font-extrabold text-4xl sm:text-6xl text-center pb-10">
        Post a Job
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-900 p-6 sm:p-10 rounded-2xl shadow-xl flex flex-col gap-6"
      >
        {/* Job Title */}
        <div>
          <label className="flex items-center gap-2 font-semibold mb-1 text-gray-700 dark:text-gray-300">
            <Briefcase className="w-5 h-5 text-indigo-400" /> Job Title
          </label>
          <Input
            placeholder="e.g., Frontend Developer"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Job Description */}
        <div>
          <label className="flex items-center gap-2 font-semibold mb-1 text-gray-700 dark:text-gray-300">
            <ListTodo className="w-5 h-5 text-indigo-400" /> Description
          </label>
          <Textarea
            placeholder="Describe the role, responsibilities, and expectations"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Location & Company */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="flex items-center gap-2 font-semibold mb-1 text-gray-700 dark:text-gray-300">
              <MapPin className="w-5 h-5 text-indigo-400" /> Location
            </label>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {State.getStatesOfCountry("IN").map(({ name }) => (
                        <SelectItem key={name} value={name}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1 text-gray-700 dark:text-gray-300">
              <Building2 className="w-5 h-5 text-indigo-400" /> Company
            </label>
            <Controller
              name="company_id"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Company">
                      {field.value
                        ? companies?.find(
                            (com) => com.id === Number(field.value)
                          )?.name
                        : "Select Company"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies?.map(({ name, id }) => (
                        <SelectItem key={id} value={id}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.company_id && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company_id.message}
              </p>
            )}
          </div>

          <div className="flex items-end">
            <AddCompanyDrawer fetchCompanies={fnCompanies} />
          </div>
        </div>

        {/* Requirements */}
        <div>
          <label className="flex items-center gap-2 font-semibold mb-1 text-gray-700 dark:text-gray-300">
            <Upload className="w-5 h-5 text-indigo-400" /> Requirements
          </label>
          <Controller
            name="requirements"
            control={control}
            render={({ field }) => (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-md border p-2">
                <MDEditor value={field.value} onChange={field.onChange} />
              </div>
            )}
          />
          {errors.requirements && (
            <p className="text-red-500 text-sm mt-1">
              {errors.requirements.message}
            </p>
          )}
        </div>

        {/* Error / Loader */}
        {errors.errorCreateJob && (
          <p className="text-red-500 text-sm">
            {errors?.errorCreateJob?.message}
          </p>
        )}
        {errorCreateJob?.message && (
          <p className="text-red-500 text-sm">{errorCreateJob?.message}</p>
        )}
        {loadingCreateJob && (
          <BarLoader width={"100%"} color="#4f46e5" className="mt-2" />
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="mt-6 w-full font-semibold text-lg bg-gradient-to-r from-indigo-500 to-indigo-700 text-white hover:brightness-110 transition duration-200 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Submit Job
        </Button>
      </form>
    </div>
  );
};

export default PostJob;
