"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

// Define interface for application object
interface Application {
  id: string;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: string;
  resumeFile: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  education: string;
}

export default function JobApplicationsPage() {
  const router = useRouter();
  
  // Mock data for applications - in a real app, this would come from your backend
  const [applications, setApplications] = useState<Application[]>([
    {
      id: "app-001",
      jobTitle: "Senior Frontend Developer",
      company: "Company Name",
      appliedDate: "2025-03-28",
      status: "Under Review",
      resumeFile: "resume_03282025.pdf",
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      experience: "5-10",
      education: "Master's",
    },
    {
      id: "app-002",
      jobTitle: "UI/UX Designer",
      company: "Company Name",
      appliedDate: "2025-03-25",
      status: "Interview Scheduled",
      resumeFile: "resume_03252025.pdf",
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      experience: "3-5",
      education: "Bachelor's",
    },
    {
      id: "app-003",
      jobTitle: "Product Manager",
      company: "Company Name",
      appliedDate: "2025-03-20",
      status: "Application Received",
      resumeFile: "resume_03202025.pdf",
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      experience: "5-10",
      education: "Master's",
    }
  ]);
  
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("All");
  
  const getStatusColor = (status: string): string => {
    switch(status) {
      case "Application Received": 
        return "bg-blue-100 text-blue-800";
      case "Under Review": 
        return "bg-yellow-100 text-yellow-800";
      case "Interview Scheduled": 
        return "bg-purple-100 text-purple-800";
      case "Offer Extended": 
        return "bg-green-100 text-green-800";
      case "Rejected": 
        return "bg-red-100 text-red-800";
      default: 
        return "bg-gray-100 text-gray-800";
    }
  };
  
  const filteredApplications = filterStatus === "All" 
    ? applications 
    : applications.filter(app => app.status === filterStatus);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#4640DE] rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-gray-800">Career Portal</h1>
            </div>
            <button 
              onClick={() => router.push("/")}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Browse Open Positions
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#4640DE] to-[#5652E5] p-8">
            <h1 className="text-white text-3xl font-bold">
              My Job Applications
            </h1>
            <p className="text-white/90 text-lg mt-2">
              Track and manage all your job applications in one place
            </p>
          </div>
          
          <div className="p-6">
            {/* Filter Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  You have applied to {applications.length} positions
                </h2>
              </div>
              
              <div className="flex items-center space-x-3">
                <label htmlFor="statusFilter" className="text-sm font-medium text-gray-700">
                  Filter by Status:
                </label>
                <select
                  id="statusFilter"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4640DE] focus:border-transparent"
                >
                  <option value="All">All Applications</option>
                  <option value="Application Received">Application Received</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Interview Scheduled">Interview Scheduled</option>
                  <option value="Offer Extended">Offer Extended</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
            
            {/* Applications Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Job Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applied Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredApplications.length > 0 ? (
                    filteredApplications.map((application) => (
                      <tr 
                        key={application.id} 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedApplication(application)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{application.jobTitle}</div>
                          <div className="text-sm text-gray-500">{application.company}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(application.appliedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(application.status)}`}>
                            {application.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedApplication(application);
                            }}
                            className="text-[#4640DE] hover:text-[#3530C3]"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center">
                        <p className="text-gray-500 text-lg">No applications match your filter.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Application Details Modal */}
        {selectedApplication && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-[#4640DE] to-[#5652E5] p-6 flex justify-between items-center rounded-t-xl">
                <h2 className="text-white text-xl font-semibold">
                  Application Details
                </h2>
                <button 
                  onClick={() => setSelectedApplication(null)}
                  className="text-white hover:text-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">
                      {selectedApplication.jobTitle}
                    </h3>
                    <p className="text-gray-600">{selectedApplication.company}</p>
                  </div>
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedApplication.status)}`}>
                    {selectedApplication.status}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Application Summary</h4>
                  
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedApplication.fullName}</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Applied On</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {new Date(selectedApplication.appliedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedApplication.email}</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedApplication.phone}</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Experience Level</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedApplication.experience} years</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Education</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedApplication.education}</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Resume</dt>
                      <dd className="mt-1 text-sm text-blue-600 cursor-pointer hover:underline">
                        {selectedApplication.resumeFile}
                      </dd>
                    </div>
                  </dl>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Application Timeline</h4>
                  
                  <div className="flow-root">
                    <ul className="-mb-8">
                      <li>
                        <div className="relative pb-8">
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-800">Application Submitted</p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                {new Date(selectedApplication.appliedDate).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      
                      <li>
                        <div className="relative pb-8">
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-800">Application Received</p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                {new Date(new Date(selectedApplication.appliedDate).getTime() + 86400000).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      
                      {selectedApplication.status !== "Application Received" && (
                        <li>
                          <div className="relative pb-8">
                            <div className="relative flex space-x-3">
                              <div>
                                <span className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center ring-8 ring-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </span>
                              </div>
                              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                  <p className="text-sm text-gray-800">{selectedApplication.status}</p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                  {new Date(new Date(selectedApplication.appliedDate).getTime() + 172800000).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedApplication(null)}
                    className="px-4 py-2 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 mr-3"
                  >
                    Close
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg font-medium text-white bg-[#4640DE] hover:bg-[#3530C3]"
                  >
                    Contact Recruiter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Job Application Tips</h3>
          <div className="flex items-start space-x-4">
            <div className="bg-blue-50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4640DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600">
                Stay proactive with your job search! Remember to follow up on your applications after 1-2 weeks if you haven't heard back. Keep your resume updated and tailor your cover letter for each position to increase your chances of success.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}