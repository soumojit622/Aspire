/* eslint-disable react/prop-types */
import { applyToJob } from "@/api/apiApplication";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useFetch from "@/hooks/use-fetch";
import { zodResolver } from "@hookform/resolvers/zod";
import { Briefcase, Check, RocketIcon, Sparkles } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";
import * as z from "zod";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  GraduationCap,
  Brain,
  FileText,
  BarChart2,
  ClipboardEdit,
  X,
} from "lucide-react";

const schema = z.object({
  experience: z
    .number()
    .min(0, { message: "Experience must be at least 0" })
    .int(),
  skills: z.string().min(1, { message: "Skills are required" }),
  education: z.enum(["Intermediate", "Graduate", "Post Graduate"], {
    message: "Education is required",
  }),
  resume: z
    .any()
    .refine(
      (file) =>
        file[0] &&
        (file[0].type === "application/pdf" ||
          file[0].type === "application/msword"),
      { message: "Only PDF or Word documents are allowed" }
    ),
});

export function ApplyJobDrawer({ user, job, fetchJob, applied = false }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingApply,
    error: errorApply,
    fn: fnApply,
  } = useFetch(applyToJob);

  const onSubmit = (data) => {
    fnApply({
      ...data,
      job_id: job.id,
      candidate_id: user.id,
      name: user.fullName,
      status: "applied",
      resume: data.resume[0],
    }).then(() => {
      fetchJob();
      reset();
    });
  };

  return (
    <Drawer open={applied ? false : undefined}>
      <DrawerTrigger asChild>
        <Button
          size="lg"
          variant={job?.isOpen && !applied ? "default" : "destructive"}
          disabled={!job?.isOpen || applied}
          className="w-full transition-all focus:outline-none bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-lg shadow-md hover:from-indigo-600 hover:to-indigo-800 mb-8"
        >
          {job?.isOpen ? (
            applied ? (
              <>
                <Check className="mr-2" /> Applied
              </>
            ) : (
              <>
                <RocketIcon className="mr-2" /> Apply
              </>
            )
          ) : (
            "Hiring Closed"
          )}
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl space-y-8">
        <DrawerHeader className="pb-6 border-b border-gray-200 dark:border-gray-700">
          <DrawerTitle className="text-3xl gradient-title font-semibold flex items-center gap-2">
            <ClipboardEdit className="w-6 h-6 text-indigo-600" />
            Apply for {job?.title} at {job?.company?.name}
          </DrawerTitle>
          <DrawerDescription className="text-gray-600 dark:text-gray-400 mt-2 text-base">
            Fill out the form to apply for this role.
          </DrawerDescription>
        </DrawerHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Experience */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
              <Briefcase className="w-4 h-4 text-indigo-500" />
              Years of Experience
            </label>

            <Input
              type="number"
              placeholder="e.g. 2"
              className="pl-3 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              {...register("experience", { valueAsNumber: true })}
            />
            {errors.experience && (
              <p className="text-red-500 text-sm">
                {errors.experience.message}
              </p>
            )}
          </div>
          {/* Skills */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200 mt-4">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              Skills
            </label>

            <Input
              type="text"
              placeholder="e.g. React, Tailwind, Node.js"
              className="pl-3 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              {...register("skills")}
            />
            {errors.skills && (
              <p className="text-red-500 text-sm">{errors.skills.message}</p>
            )}
          </div>
          {/* Education */}
          <div>
            <Label className="flex items-center gap-2 text-gray-800 dark:text-gray-200 text-sm font-medium">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              Education
            </Label>
            <Controller
              name="education"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  className="space-y-2 mt-2"
                >
                  {["Intermediate", "Graduate", "Post Graduate"].map(
                    (level) => (
                      <div key={level} className="flex items-center gap-3">
                        <RadioGroupItem value={level} id={level} />
                        <Label
                          htmlFor={level}
                          className="text-sm text-gray-700 dark:text-gray-300"
                        >
                          {level}
                        </Label>
                      </div>
                    )
                  )}
                </RadioGroup>
              )}
            />
            {errors.education && (
              <p className="text-red-500 text-sm mt-1">
                {errors.education.message}
              </p>
            )}
          </div>
          {/* Resume Upload */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
              <FileText className="w-4 h-4 text-indigo-400" />
              Upload Resume
            </label>

            <div className="relative group">
              <input
                type="file"
                accept=".pdf, .doc, .docx"
                className="w-full pl-3 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 file:cursor-pointer file:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
                {...register("resume")}
              />
            </div>

            {errors.resume && (
              <p className="text-red-500 text-sm">{errors.resume.message}</p>
            )}
          </div>
          {/* Error Message */}
          {errorApply?.message && (
            <p className="text-red-500 text-sm mt-2">{errorApply?.message}</p>
          )}
          {/* Loading */}
          {loadingApply && <BarLoader width="100%" color="#5853eb" />}
          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 flex items-center justify-center gap-2 transition-all duration-200"
          >
            <ClipboardEdit className="w-5 h-5" />
            Apply
          </Button>
        </form>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button
              type="button"
              className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white transition-colors"
            >
              <X className="w-5 h-5" />
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
