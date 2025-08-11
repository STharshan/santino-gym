"use client"; // Marking this file as a client component to use React hooks

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [enquiryType, setEnquiryType] = useState<string>("");
  const [preferredContactMethod, setPreferredContactMethod] = useState<string>("");
  const [membershipGoal, setMembershipGoal] = useState<string>("");
  const [trainerGender, setTrainerGender] = useState<string>("");
  const [sessionPreference, setSessionPreference] = useState<string>("");
  const [fitnessGoal, setFitnessGoal] = useState<string>("");
  const [trainingDays, setTrainingDays] = useState<string>("");

  // Options for dropdowns
  const enquiryOptions = ["General", "Personal Training", "Other"];
  const membershipGoals = ["Lose Weight", "Build Muscle", "Stay Fit", "Other"];
  const trainerGenders = ["No Preference", "Male", "Female"];
  const sessionPreferences = ["1-on-1", "Small Group", "Online"];
  const trainingDaysOptions = ["1", "2", "3", "4+"];  // Changed name to reflect proper state

  // Basic info
  const preferredContactMethods = ["Phone", "Email", "Text"];

  return (
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
                  <span className="text-white">📍</span>
                </div>
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400">Great Northern Rd, Derby, DE1 1LR</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">📞</span>
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+44 7565 603231</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">✉️</span>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">info@santinosgym.com</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <form className="space-y-6">
                {/* Basic Info */}
                <Input
                  placeholder="Full Name"
                  className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                />
                
                {/* Preferred Contact Method Dropdown */}
                <div className="relative">
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
                </div>

                {/* Type of Enquiry Dropdown */}
                <div className="relative">
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
                </div>

                {/* Conditional Fields Based on Type of Enquiry */}
                {enquiryType === "General" && (
                  <>
                    <div className="relative">
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
                    </div>
                    <Input
                      placeholder="Preferred Gym Location"
                      className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                    />
                    <Input
                      type="date"
                      placeholder="Start Date"
                      className="bg-black border-gray-700 text-white placeholder:text-gray-400"
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
                    <div className="relative">
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
                    </div>
                    <div className="relative">
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
                    </div>
                    <div className="relative">
                      <select
                        value={trainingDays}
                        onChange={(e) => setTrainingDays(e.target.value)} // Fixed the handler here
                        className="bg-black text-white border-gray-700 w-full p-2 rounded-md"
                      >
                        <option value="">Training Days Per Week</option>
                        {trainingDaysOptions.map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Input
                      placeholder="Availability"
                      className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                    />
                  </>
                )}

                {enquiryType === "Other" && (
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-black border-gray-700 text-white placeholder:text-gray-400"
                  />
                )}

                {/* Submit Button */}
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
