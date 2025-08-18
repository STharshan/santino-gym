"use client"; // Mark this file as a client-side component to use React hooks

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";  // New package
import { toast, ToastContainer } from 'react-toastify'; // Import Toast

import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS
import { Phone, Mail, MapPin } from "lucide-react"; // Import Lucide Icons

export function ContactSection() {
  const [enquiryType, setEnquiryType] = useState<string>("");
  const [preferredContactMethod, setPreferredContactMethod] = useState<string>("");
  const [membershipGoal, setMembershipGoal] = useState<string>("");
  const [trainerGender, setTrainerGender] = useState<string>("");
  const [sessionPreference, setSessionPreference] = useState<string>("");
  const [fitnessGoal, setFitnessGoal] = useState<string>("");
  const [trainingDays, setTrainingDays] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string>(""); // New state for additional info

  // Options for dropdowns
  const enquiryOptions = ["General", "Personal Training", "Other"];
  const membershipGoals = ["Lose Weight", "Build Muscle", "Stay Fit", "Other"];
  const trainerGenders = ["No Preference", "Male", "Female"];
  const sessionPreferences = ["1-on-1", "Small Group", "Online"];
  const trainingDaysOptions = ["1", "2", "3", "4+"];
  const preferredContactMethods = ["Phone", "Email", "Text"];

  // EmailJS sending function
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation: Check if required fields are filled
    if (!fullName || !email || !phone || !preferredContactMethod || !enquiryType) {
      toast.error("Please fill in all required fields.");
      return; // Stop further execution if validation fails
    }

    // Check if General enquiry requires membership goal or Personal Training requires fitness goal
    if (enquiryType === "General" && !membershipGoal) {
      toast.error("Please select a membership goal.");
      return;
    }

    if (enquiryType === "Personal Training" && !fitnessGoal) {
      toast.error("Please specify your fitness goal.");
      return;
    }

    const templateParams = {
      fullName,
      email,
      phone,
      preferredContactMethod,
      enquiryType,
      membershipGoal,
      fitnessGoal,
      trainerGender,
      sessionPreference,
      trainingDays,
      message,
      location,  // Add location
      startDate,
      additionalInfo, // Send additional information
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
      .then(
        () => {
          // Use toast notification for success
          toast.success("Enquiry has been sent successfully!");
          // Reset form fields after success
          resetForm();
        },
        () => {
          // Use toast notification for error
          toast.error("There was an error sending your enquiry. Please try again later.");
        }
      );
  };

  // Reset the form fields
  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setPreferredContactMethod("");
    setEnquiryType("");
    setMembershipGoal("");
    setFitnessGoal("");
    setTrainerGender("");
    setSessionPreference("");
    setTrainingDays("");
    setMessage("");
    setLocation("");
    setStartDate("");
    setAdditionalInfo(""); // Reset additional information field
  };

  return (
    <>
      {/* Toast Container to display toast messages */}
      <ToastContainer />

      <section id="contact" className="py-20 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-px bg-red-500 mr-4"></div>
              <p className="text-red-500 text-sm font-medium uppercase tracking-wider">
                GET IN TOUCH
              </p>
              <div className="w-12 h-px bg-red-500 ml-4"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              CONTACT US
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-white w-6 h-6" /> {/* Location Icon */}
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-400">Great Northern Rd, Derby, DE1 1LR</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-white w-6 h-6" /> {/* Phone Icon */}
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">+44 7565 603231</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-white w-6 h-6" /> {/* Email Icon */}
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">info@santinosgym.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The form to submit data */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={sendEmail}>
                  <Input
                    placeholder="Full Name"
                    className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {/* Select fields */}
                  <select
                    value={preferredContactMethod}
                    onChange={(e) => setPreferredContactMethod(e.target.value)}
                    className="bg-black text-white border-gray-700 w-full p-2 rounded-md"
                  >
                    <option value="">Preferred Contact Method</option>
                    {preferredContactMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>

                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="bg-black text-white border-gray-700 w-full p-2 rounded-md"
                  >
                    <option value="">Type of Enquiry</option>
                    {enquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  {/* Conditional fields based on enquiry type */}
                  {enquiryType === "General" && (
                    <>
                      <select
                        value={membershipGoal}
                        onChange={(e) => setMembershipGoal(e.target.value)}
                        className="bg-black text-white border-gray-700 w-full p-2 rounded-md"
                      >
                        <option value="">Membership Goal</option>
                        {membershipGoals.map((goal) => (
                          <option key={goal} value={goal}>
                            {goal}
                          </option>
                        ))}
                      </select>
                      <Textarea
                        value={location}
                        placeholder="Preferred Gym Location"
                        onChange={(e) => setLocation(e.target.value)}
                        className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                      />
                      <Input
                        type="date"
                        placeholder="Start Date"
                        className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)} // Handle the date change
                      />
                    </>
                  )}

                  {enquiryType === "Personal Training" && (
                    <>
                      <Input
                        placeholder="Fitness Goal"
                        className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                        value={fitnessGoal}
                        onChange={(e) => setFitnessGoal(e.target.value)}
                      />
                      <select
                        value={trainerGender}
                        onChange={(e) => setTrainerGender(e.target.value)}
                        className="bg-black text-white border-gray-700 w-full p-2 rounded-md"
                      >
                        <option value="">Preferred Trainer Gender</option>
                        {trainerGenders.map((gender) => (
                          <option key={gender} value={gender}>
                            {gender}
                          </option>
                        ))}
                      </select>
                      <select
                        value={sessionPreference}
                        onChange={(e) => setSessionPreference(e.target.value)}
                        className="bg-black text-white border-gray-700 w-full p-2 rounded-md"
                      >
                        <option value="">Session Preference</option>
                        {sessionPreferences.map((session) => (
                          <option key={session} value={session}>
                            {session}
                          </option>
                        ))}
                      </select>
                      <select
                        value={trainingDays}
                        onChange={(e) => setTrainingDays(e.target.value)}
                        className="bg-black text-white border-gray-700 w-full p-2 rounded-md"
                      >
                        <option value="">Training Days Per Week</option>
                        {trainingDaysOptions.map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </>
                  )}

                  {enquiryType === "Other" && (
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  )}

                  {/* Additional Information Text Box */}
                  <Textarea
                    placeholder="Additional Information"
                    rows={4}
                    className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                  />

                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
