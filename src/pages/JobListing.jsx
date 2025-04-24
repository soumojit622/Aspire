import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { State } from "country-state-city";
import { BarLoader } from "react-spinners";
import useFetch from "@/hooks/use-fetch";
import { Search, MapPin, Briefcase, X } from "lucide-react";
import JobCard from "@/components/job-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getCompanies } from "@/api/apiCompanies";
import { getJobs } from "@/api/apiJobs";

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");

  const { isLoaded } = useUser();

  const {
    // loading: loadingCompanies,
    data: companies,
    fn: fnCompanies,
  } = useFetch(getCompanies);

  const {
    loading: loadingJobs,
    data: jobs,
    fn: fnJobs,
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) fnJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, location, company_id, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    const query = formData.get("search-query");
    if (query) setSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setCompany_id("");
    setLocation("");
  };

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#5853eb" />;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-6">
      {/* Section Title */}
      <h1 className="text-center font-extrabold text-6xl sm:text-7xl text-transparent bg-clip-text gradient-title pb-8 tracking-tight">
        Latest Jobs
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row w-full gap-6 sm:gap-4 mb-6"
      >
        <div className="flex items-center w-full border border-gray-300 rounded-lg">
          <Search className="w-5 h-5 text-gray-500 mx-4" />
          <Input
            type="text"
            placeholder="Search Jobs by Title..."
            name="search-query"
            className="h-14 px-6 text-md rounded-lg border-0 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ease-in-out duration-200"
          />
        </div>
        <Button
          type="submit"
          className="h-14 sm:w-32 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition-all ease-in-out duration-300 transform hover:scale-105"
        >
          <Search className="w-5 h-5" />{" "}
          {/* Add the Search icon before the text */}
          Search
        </Button>
      </form>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 mb-8">
        {/* Location Filter */}
        <Select value={location} onValueChange={(value) => setLocation(value)}>
          <SelectTrigger className="flex items-center space-x-2">
            <MapPin className="text-indigo-500 w-5 h-5" />
            <SelectValue placeholder="Filter by Location" />
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

        {/* Company Filter */}
        <Select
          value={company_id}
          onValueChange={(value) => setCompany_id(value)}
        >
          <SelectTrigger className="flex items-center space-x-2">
            <Briefcase className="text-indigo-500 w-5 h-5" />
            <SelectValue placeholder="Filter by Company" />
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

        {/* Clear Filters Button */}
        <Button
          className="h-9 sm:w-1/2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-all ease-in-out duration-300 transform hover:scale-105"
          variant="destructive"
          onClick={clearFilters}
        >
          <X className="w-5 h-5" />
          Clear Filters
        </Button>
      </div>

      {/* Loading Indicator */}
      {loadingJobs && (
        <BarLoader className="mt-4" width={"100%"} color="#5853eb" />
      )}

      {/* Jobs List */}
      {loadingJobs === false && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs?.length ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                savedInit={job?.saved?.length > 0}
              />
            ))
          ) : (
            <div className="text-center text-gray-500 font-semibold flex flex-col items-center justify-center py-8">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-6 rounded-full shadow-xl mb-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20 text-white animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 12H9M12 9v6" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-400 mb-2">
                No Jobs Found 😢
              </h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
