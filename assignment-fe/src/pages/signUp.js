import React, { useState } from "react";
import axios from "axios";


export const signUp = () => {

  const url = "http://localhost:5000/api/file/upload"; // backend url
  const [selectedFile, setSelectedFile] = useState(null);
  const [userInfo, setuserInfo] = useState([]);

  const onChangeHandler = (event) => {
      console.log(event.target.files[0])
      let img = event.target.files[0];
      setSelectedFile(URL.createObjectURL(img));
      //console.log(selectedFile)
      const fd = new FormData();
      fd.append('productImage', event.target.files[0], event.target.files[0].name);
      axios.post(url, fd, {
          onUploadProgress: progressEvent => console.log("uploaded progress: " + (progressEvent.loaded / progressEvent.total * 100) + "%")
      }).then(res => {
          console.log(res.data._id);
      });

  }

  const onClickUserHandler = (event) => {
      event.preventDefault();
     console.log(event.target.files[0]);
     
      
  }

    return (
      <>
      <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div>
              <h3 className="mb-8 mt-8  sm:mt-px sm:pt-2 text-lg leading-6 font-large font-bold text-3xl text-gray-900">Registration Form</h3>

            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  value= {formData.Name}
                  onChange = {handleChange}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Username
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      value= {formData.userName}
                      onChange = {handleChange}
                      className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Password
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="Password"
                    id="Password"
                    
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Confirm Password
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="Confirm Password"
                    id="Confirm Password"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Profile Picture
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">

                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Zipcode
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="zip"
                id="zip"
                autoComplete="postal-code"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>


        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={onClickUserHandler}

              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      </>
    )
   
  }
