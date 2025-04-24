/* eslint-disable react/prop-types */
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFetch from "@/hooks/use-fetch";
import { addNewCompany } from "@/api/apiCompanies";
import { BarLoader } from "react-spinners";
import { useEffect, useRef } from "react";
import { Plus, Upload, Building2, ImagePlus, X } from "lucide-react"; // Icons

const schema = z.object({
  name: z.string().min(1, { message: "Company name is required" }),
  logo: z
    .any()
    .refine(
      (file) =>
        file[0] &&
        (file[0].type === "image/png" || file[0].type === "image/jpeg"),
      {
        message: "Only PNG or JPEG images are allowed",
      }
    ),
});

const AddCompanyDrawer = ({ fetchCompanies }) => {
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingAddCompany,
    error: errorAddCompany,
    data: dataAddCompany,
    fn: fnAddCompany,
  } = useFetch(addNewCompany);

  const onSubmit = async (data) => {
    fnAddCompany({
      ...data,
      logo: data.logo[0],
    });
    reset();
  };

  useEffect(() => {
    if (dataAddCompany?.length > 0) {
      fetchCompanies();
    }
  }, [loadingAddCompany]);

  return (
    <Drawer>
      <DrawerTrigger>
        <Button
          type="button"
          size="sm"
          variant="secondary"
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Company
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold gradient-title flex items-center gap-2">
            <Building2 className="w-5 h-5 text-white" />
            Add a New Company
          </DrawerTitle>
        </DrawerHeader>

        <form
          className="flex flex-col gap-5 px-6 py-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Company Name Field */}
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 font-medium text-sm text-gray-400">
              <Building2 className="w-4 h-4" />
              Company Name
            </label>
            <Input
              placeholder="Enter company name"
              {...register("name")}
              className="rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* File Upload Styled */}
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 font-medium text-sm text-gray-400">
              <ImagePlus className="w-4 h-4" />
              Company Logo
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-indigo-400 hover:border-indigo-600 rounded-md p-4 text-center cursor-pointer transition-all"
            >
              <p className="text-sm text-gray-600">
                Click to upload PNG or JPEG logo
              </p>
              <Upload className="mx-auto mt-2 w-6 h-6 text-indigo-400" />
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              {...register("logo")}
              ref={fileInputRef}
            />
            {errors.logo && (
              <p className="text-red-500 text-sm">{errors.logo.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <Button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white hover:brightness-110 transition-all"
            >
              <Upload className="w-4 h-4" />
              Add Company
            </Button>
          </div>
        </form>

        {/* Footer Section */}
        <DrawerFooter className="px-6 pt-2">
          {errorAddCompany?.message && (
            <p className="text-red-500 text-sm">{errorAddCompany?.message}</p>
          )}
          {loadingAddCompany && <BarLoader width={"100%"} color="#6366f1" />}
          <DrawerClose asChild>
            <Button
              type="button"
              className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white transition-colors"
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddCompanyDrawer;
