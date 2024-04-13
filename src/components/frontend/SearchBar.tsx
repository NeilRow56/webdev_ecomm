import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
  return (
    <>
      <form className=" max-w-md ">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <Search />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-full border border-gray-300 bg-gray-50 p-5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="absolute bottom-2.5 end-2.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/70 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </>
  )
}
