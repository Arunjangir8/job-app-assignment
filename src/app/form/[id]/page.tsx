"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function JobApplicationForm() {
  const params = useParams();
  const router = useRouter();
  const jobTitle = params.id as string;
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    skills: "",
    currentRole: "",
    availability: "",
    linkedin: "",
    github: "",
    resume: null as File | null,
    motivation: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };
  
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        router.push("/myapplications");
      }, 2000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform transition-transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Career Portal
              </h1>
            </div>
            <button 
              onClick={() => router.push("/")}
              className="px-4 py-2 rounded-lg text-indigo-600 hover:text-indigo-700 font-medium hover:bg-indigo-50 transition-colors duration-200"
            >
              Back to Jobs
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white shadow-xl  overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-2xl">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-1/3 -translate-y-1/3">
              <div className="w-full h-full bg-white/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <h1 className="text-white text-4xl font-bold mb-4 leading-tight">
                Apply for {jobTitle?.replace(/%20/g, " ")}
              </h1>
              <p className="text-white/90 text-xl font-light">
              Advance your career and unlock new opportunities with us!
              </p>
            </div>
          </div>
          
          <div className="p-8">
            <div className="mb-10">
              <div className="flex justify-end items-center space-x-8">
                {Array.from({length: totalSteps}).map((_, idx) => (
                  <div key={idx} className="flex items-center">
                    {idx > 0 && (
                      <div className={`w-12 h-0.5 mr-8 transition-all duration-300 ${
                        currentStep > idx ? "bg-green-500" : "bg-gray-200"
                      }`} />
                    )}
                    <div className="flex flex-col items-center">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-medium transition-all duration-300 ${
                        currentStep > idx + 1
                          ? "bg-green-500 text-white shadow-lg shadow-green-200"
                          : currentStep === idx + 1
                          ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200"
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {currentStep > idx + 1 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <div className="flex items-center">
                            {idx === 0 && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            )}
                            {idx === 1 && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            )}
                            {idx === 2 && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                          </div>
                        )}
                      </div>
                      <span className="mt-3 text-sm font-medium text-gray-600">
                        {idx === 0 ? "Basic Info" : idx === 1 ? "Professional" : "Final Steps"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Basic Information
                  </h2>
                  <p className="text-gray-600">Let's start with your contact details</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                        Position Applied For <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        required
                        value={formData.position || jobTitle?.replace(/%20/g, " ")}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                        placeholder="Software Engineer"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Professional Details
                  </h2>
                  <p className="text-gray-600">Tell us about your professional background</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                        Years of Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">Less than 1 year</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">More than 10 years</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700">
                        Current Role <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="currentRole"
                        name="currentRole"
                        required
                        value={formData.currentRole}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                        placeholder="Senior Developer"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                        Key Skills <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="skills"
                        name="skills"
                        required
                        value={formData.skills}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                        placeholder="React, Node.js, TypeScript"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                        Availability to Start <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="availability"
                        name="availability"
                        required
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                      >
                        <option value="">Select availability</option>
                        <option value="immediate">Immediate</option>
                        <option value="2-weeks">2 weeks notice</option>
                        <option value="1-month">1 month notice</option>
                        <option value="2-months">2+ months notice</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Final Steps
                  </h2>
                  <p className="text-gray-600">Complete your application with additional information</p>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          id="linkedin"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="github" className="block text-sm font-medium text-gray-700">
                          GitHub Profile
                        </label>
                        <input
                          type="url"
                          id="github"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                        Resume/CV <span className="text-red-500">*</span>
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 transition-all duration-200 hover:border-indigo-300">
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          required
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label 
                          htmlFor="resume" 
                          className="cursor-pointer flex flex-col items-center justify-center space-y-2"
                        >
                          <div className="p-3 rounded-full bg-indigo-50 text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </div>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium text-indigo-600">Click to upload</span> or drag and drop
                          </div>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, DOCX up to 10MB
                          </p>
                        </label>
                        {formData.resume && (
                          <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{formData.resume.name}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                        Why are you interested in this role? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        rows={4}
                        required
                        value={formData.motivation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 text-gray-900"
                        placeholder="Share what excites you about this opportunity..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-10 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    currentStep === 1
                      ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                      : "text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous Step
                </button>
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 rounded-md font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className={`px-8 py-3 rounded-md font-medium text-white transform transition-all duration-200 ${
                      isSubmitting || submitSuccess
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </div>
                    ) : submitSuccess ? (
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Application Submitted!
                      </div>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        
        <div className="bg-white shadow-lg  p-8 transform transition-all duration-300 hover:shadow-xl">
          <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Need Assistance?
          </h3>
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                Our talent acquisition team is here to help! Reach out to us at {" "}
                <a href="mailto:talent@company.com" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200">
                  arunjangir9987@gmail.com
                </a>{" "}
                or call{" "}
                <span className="text-indigo-600 font-medium">
                  +91-742894XXXX
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Arun All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}