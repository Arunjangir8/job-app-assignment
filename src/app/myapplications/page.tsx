"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
        return "bg-emerald-100 text-emerald-800";
      case "Under Review": 
        return "bg-teal-100 text-teal-800";
      case "Interview Scheduled": 
        return "bg-violet-100 text-violet-800";
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
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-emerald-50">
      <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center transform transition-transform hover:scale-110 duration-300 shadow-md hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Career Portal
              </h1>
            </div>
            <button 
      onClick={() => router.push("/")}
      className="px-4 py-2 rounded-lg text-teal-600 hover:text-white font-medium hover:bg-teal-600 transition-all duration-300 border border-teal-600 hover:border-transparent"
    >
      Home
    </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white shadow-xl  overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-2xl border border-teal-100">
          <div className="bg-gradient-to-r from-teal-600 to-emerald-500 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-1/3 -translate-y-1/3">
              <div className="w-full h-full bg-white/10  blur-3xl"></div>
            </div>
            <div className="relative">
              <h1 className="text-white text-4xl font-bold mb-4 leading-tight">
                My Job Applications
              </h1>
              <p className="text-white/90 text-xl font-light">
                Track and manage all your job applications in one place
              </p>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  You have applied to {applications.length} positions
                </h2>
                <p className="text-gray-500 mt-1">Keep track of your application progress</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <label htmlFor="statusFilter" className="text-sm font-medium text-gray-700">
                  Filter by Status:
                </label>
                <select
                  id="statusFilter"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 rounded-md border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 hover:border-teal-400 text-gray-900 shadow-sm"
                >
                  <option value="All">All Applications</option>
                  <option value="Application Received">Application Received</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Interview Scheduled">Interview Scheduled</option>
                </select>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-teal-50 border-b border-teal-100">
                    <th className="px-6 py-4 text-left text-xs font-medium text-teal-700 uppercase tracking-wider">
                      Job Title
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-teal-700 uppercase tracking-wider">
                      Applied Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-teal-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-teal-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal-100">
                  {filteredApplications.length > 0 ? (
                    filteredApplications.map((application) => (
                      <tr 
                        key={application.id} 
                        className="hover:bg-teal-50 transition-colors duration-300 cursor-pointer group"
                        onClick={() => setSelectedApplication(application)}
                      >
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-teal-700 transition-colors duration-200">{application.jobTitle}</div>
                          <div className="text-sm text-gray-500 group-hover:text-teal-600 transition-colors duration-200">{application.company}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                            {new Date(application.appliedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(application.status)} group-hover:shadow-sm transition-all duration-200`}>
                            {application.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedApplication(application);
                            }}
                            className="text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200 hover:underline"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 14h.01M12 16h.01M12 18h.01M12 20h.01M12 22h.01" />
                          </svg>
                          <p className="text-gray-500 text-lg mb-2">No applications match your filter</p>
                          <p className="text-gray-400">Try adjusting your filter criteria</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {selectedApplication && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white  max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl transform transition-all scale-95 to-scale-100 duration-300 animate-fadeIn rounded-md">
              <div className="bg-gradient-to-r from-teal-600 to-emerald-500 p-6 flex justify-between items-center rounded-t-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-1/3 -translate-y-1/3">
                  <div className="w-full h-full bg-white/10 rounded-full blur-3xl"></div>
                </div>
                <h2 className="text-white text-xl font-semibold relative">
                  Application Details
                </h2>
                <button 
                  onClick={() => setSelectedApplication(null)}
                  className="text-white/90 hover:text-white transition-colors duration-200 relative p-1 rounded-full hover:bg-white/10"
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
                
                <div className="border-t border-teal-100 pt-4">
                  <h4 className="text-lg font-medium text-teal-800 mb-3">Application Summary</h4>
                  
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                    <div>
                      <dt className="text-sm font-medium text-teal-600">Full Name</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedApplication.fullName}</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-teal-600">Applied On</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {new Date(selectedApplication.appliedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-teal-600">Email Address</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedApplication.email}</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-teal-600">Phone Number</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedApplication.phone}</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-teal-600">Experience Level</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedApplication.experience} years</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-teal-600">Education</dt>
                      <dd className="mt-1 text-sm text-gray-900">{selectedApplication.education}</dd>
                    </div>
                    
                    <div>
                      <dt className="text-sm font-medium text-teal-600">Resume</dt>
                      <dd className="mt-1 text-sm text-teal-600 hover:text-emerald-700 cursor-pointer transition-colors duration-200 hover:underline">
                        {selectedApplication.resumeFile}
                      </dd>
                    </div>
                  </dl>
                </div>
                
                <div className="border-t border-teal-100 pt-4">
                  <h4 className="text-lg font-medium text-teal-800 mb-3">Application Timeline</h4>
                  
                  <div className="flow-root">
                    <ul className="-mb-8">
                      <li>
                        <div className="relative pb-8">
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-teal-200" aria-hidden="true"></span>
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center ring-8 ring-white">
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
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-teal-200" aria-hidden="true"></span>
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center ring-8 ring-white">
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
                                <span className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center ring-8 ring-white">
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
                
                <div className="border-t border-teal-100 pt-4 flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedApplication(null)}
                    className="px-4 py-2 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  >
                    Close
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Contact Recruiter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-white shadow-xl  p-8 transform transition-all duration-300 hover:shadow-2xl border border-teal-100 hover:border-teal-200">
          <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Job Search Tips
          </h3>
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-teal-100 to-emerald-100 p-3 rounded-xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                Stay proactive with your job search! Remember to follow up on your applications after 1-2 weeks if you haven't heard back. Keep your resume updated and tailor your cover letter for each position to increase your chances of success.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors duration-300 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors duration-300 hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors duration-300 hover:underline">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}