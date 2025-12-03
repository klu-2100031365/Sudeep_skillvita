"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CollaborationForm() {
    return (
        <div className="w-full p-8 bg-white">
            <div className="space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-black">Let&apos;s Collaborate</h2>
                    <p className="text-gray-600 text-sm">Fill in your details and we&apos;ll get back to you shortly</p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-black font-medium">Full Name</Label>
                        <Input 
                            id="name" 
                            name="name" 
                            placeholder="Enter your full name" 
                            className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="college" className="text-black font-medium">College/Organization Name</Label>
                        <Input 
                            id="college" 
                            name="college" 
                            placeholder="Enter your college or organization" 
                            className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-black font-medium">Email Address</Label>
                        <Input 
                            id="email" 
                            name="email" 
                            type="email"
                            placeholder="your.email@example.com" 
                            className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-black font-medium">Phone Number</Label>
                        <Input 
                            id="phone" 
                            name="phone" 
                            type="tel"
                            placeholder="+1 (555) 000-0000" 
                            className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-black focus:ring-black"
                        />
                    </div>
                </div>

                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full h-12 font-medium" size="lg">
                    Submit Request
                </Button>
            </div>
        </div>
    );
}
