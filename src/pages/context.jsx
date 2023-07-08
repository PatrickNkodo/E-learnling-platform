import React, { useContext } from "react";
import { json } from "react-router";

// Create a new context object
const MyContext = React.createContext();

const Context = ({ children }) => {// Define a component that provides the context to its children
  const apiUrl = "http://localhost:4000";// Define the base URL for the API and the token from local storage
  const getToken=()=>localStorage.getItem("token");
  //Custom fetch function that adds headers and a JSON body to API requests
  const customFetch = async (url, options = {}) => {
    const token =getToken()
      const defaultHeaders = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
    };
    // Convert the request body to JSON if it's an object
    let body = options.body;
    if (typeof body === "object" && body !=undefined) {
      body = JSON.stringify(body);
    }
    // Combine the default headers with any custom headers from the options object (options is an object with keys: headers,body)
    const headers = { ...defaultHeaders, ...options.headers };
    // Combine the options object with the headers and body properties
    const config = { ...options, headers, body };
  
    // Use the fetch API to make the API request and handle any errors
    try {
        let response = await fetch(`${apiUrl}${url}`, config);
      // Parse the response body as JSON and return the data
      const data = await response.json();
      return data;
   } catch (e) {
     console.log('Error:'+e.message)
   }
  };
  const customFetch2 = async (url, options = {}) => {
      const defaultHeaders = {
          "Content-Type": "application/json",
    };
    let body = options.body;
    if (typeof body === "object" && body !=undefined) {
      body = JSON.stringify(body);
    }
    const headers = { ...defaultHeaders, ...options.headers };
    // update the headers and body properties from the options object.
    const config = { ...options, headers, body };
  
    try {
        let response = await fetch(`${apiUrl}${url}`, config);
      // Parse the response body as JSON and return the data
      const data = await response.json();
      return data;
   } catch (e) {
     console.log('Error:'+e.message)
   }
  };
  async function createUser(fields){
    let data=await customFetch('/signin',{method:'post',body:{...fields}})
    return data
  }
  async function createAdminUser(fields){
    let data=await customFetch('/signin',{method:'post',body:{...fields}})
    return data
  }
  async function fetchProfile(){
      let data=await customFetch('/profile',{method:'post'})
      return data;
  }

  async function fetchSingleCourse(_id){
    let data=await customFetch(`/courses?id=${_id}`,{method:'get'})
    return data 
  }
  async function fetchSingleUser(email){
    let data=await customFetch(`/users?email=${email}`,{method:'get'})
    console.log(data);
    return data 
  }
  async function fetchCourses(){
    let data=await customFetch2('/courses',{method:'get'})
    return data 
  }
    async function mycourses(){
      let data=await customFetch('/mycourses',{method:'get'})
      return data
    }
    async function teacherCourses(){
      let data=await customFetch('/mycreatedcourses',{method:'get'})
      return data
    }
    async function allUsers(){
      let data=await customFetch('/everyone',{method:'get'})
      return data
    }
    async function updateProfile(fields){
      let data=await customFetch('/update',{method:'PATCH',body:{...fields}})
      return data;
    }
    async function createCourse(fields){
      let data=await customFetch('/addcourse',{method:'post',body:{...fields}})
      return data;
    }
    async function addLesson(fields){
      let data=await customFetch('/addlesson',{method:'post',body:{...fields}})
      return data;
    }
    
    async function enrollTocourse(fields){
      let data=await customFetch('/enroll',{method:'post',body:{...fields}})
      return data;
    }
    
    async function fetchNextLesson(id,sid){
      let data=await customFetch(`/nextlesson?id=${id}&sid=${sid}`,{method:'get'})
      return data;
    }
    async function deleteLesson(fields){
      let data=await customFetch('/deletelesson',{method:'delete',body:{...fields}})
      return data;
    }

  // Return the MyContext provider with the customFetch function in its value prop
  return (
    <MyContext.Provider value={{createCourse,fetchNextLesson,enrollTocourse,fetchSingleUser,fetchSingleCourse,addLesson,teacherCourses,allUsers,createUser,createAdminUser,fetchCourses,deleteLesson,fetchProfile,mycourses,updateProfile}}>
      {children}
    </MyContext.Provider>
  );
};

// Define a custom hook that returns the MyContext object
export const useEverywhere = () => {
  return useContext(MyContext);
};

// Export the Context component as the default export of the module
export default Context;