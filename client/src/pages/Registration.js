import Footer from "./Footer";
import banner from "./images/team_banner.png";
import hacker from "./images/hacker.jpg"
import { useState } from "react";

const Registration = () => {
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [phone,setPhone] = useState('')
const [interest,setInterest] = useState('')
const [occupation,setOccupation] = useState('')
const [company,setCompany] = useState('')

  return (
    <div>
      <section
        className={`bg-cover bg-no-repeat h-[60vh] sm:h-screen flex flex-col justify-center items-center gap-8 `}
        style={{ backgroundImage: `url(${hacker})` }}
      >
        <div className="inline-block m-0 text-transparent bg-[url('https://s3-alpha-sig.figma.com/img/94e1/68cb/3a0c7f4b515c899c5550dc4331074056?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cGWCb4cdmGdNk5NfTsy~WmX7iTm-IhvP4PQeXzYOD5eXZiqAcx5Ub4ubIUbQDm2YhcD-rmZK-gLMv69TjhQoV~3bsHSFTGMPlWmnoXi4HAH5nU747R6mGI0~YultVPgiSfX1ag6~IE4hbMTq78V1OQwWIfBcd7K1HarZajFqPKICjti4KU4KQKQGHM34mntqqAc2fZy84-s8irlOZm3cwxHY4tR~ODFGYOSPwhAHfkQ5UVDOcFW6cOvIC8WnD2NrV09zm9cBSfk0lFLRtPIWm6e5uRiOpzXiNQenrgEeAGUFCXhWLJJcq9GaA~a9U3s3JntQ5nBYbtj~4pZNbtNAEA__')] bg-cover bg-no-repeat bg-center bg-clip-text">
          <h1
            className="text-center text-6xl sm:text-9xl font-['inter var'] mx-40"
            style={{ WebkitTextStroke: "1px white" }}
          >
            
            Registration Form
          </h1>
          
        </div>
        </section>
<div className=" bg-black w-full flex justify-center p-4">

        <form className=" w-full lg:w-2/3 bg-white p-4 rounded-lg">
            <div className="font-semibold text-2xl">Book your slot for the upcoming event !!
            <div className="h-[.15rem] bg-red-500 w-24 my-1"></div></div>
          <div class="w-full md:w-full mb-4 mt-8">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              for="name"
            >
              Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your name"
              id="name"
              value = {name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div class="w-full md:w-full  my-6">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              for="name"
            >
              Email
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your Email"
              id="name"
              value = {email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div class="w-full md:w-full  my-6">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              for="name"
            >
              Phone Number
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="number"
              placeholder="Enter your Phone Number"
              id="phoneNumber"
              value = {phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
          <div class="w-full md:w-full  my-6">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              for="Occupation"
            >
              Occupation
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Enter your Occupation"
              id="occupation"
              value = {occupation}
              onChange={(e)=>setOccupation(e.target.value)}
            />
          </div>
          <div class="w-full md:w-full  my-6">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              for="interest"
            >
              Area of interest in CyberSecurity
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              id="interest"
              value = {interest}
              onChange={(e)=>setInterest(e.target.value)}
            />
          </div>
          <div class="w-full md:w-full my-6">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              for="name"
            >
              College Name / Company Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              id="c-name"
              value = {company}
              onChange={(e)=>setCompany(e.target.value)}
            />
          </div>
          <div className="mt-12 mb-8 flex justify-center">
          <button type="submit" className="py-2 px-16 bg-red-500 rounded-lg text-white">Register Now</button>
          </div>
        </form>
        </div>
        <Footer />
    </div>
  );
};

export default Registration;
