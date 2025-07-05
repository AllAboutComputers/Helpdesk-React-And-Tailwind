import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Edit } from "lucide-react";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  return (
    <Layout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">User Profile</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <CardTitle>Profile Information</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gray-300 text-black text-2xl">
                      <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center">
                        <div className="h-6 w-6 bg-white rounded-full"></div>
                      </div>
                    </AvatarFallback>
                  </Avatar>
                </div>

                {isEditing ? (
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-1">
                      <TabsTrigger
                        value="account"
                        className="bg-primary text-primary-foreground"
                      >
                        Edit Account
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="account" className="mt-6">
                      <div className="grid grid-cols-2 w-full bg-gray-700" style={{ gridTemplateColumns: "1fr 3fr" }}>
                        {[
                          { id: "username", label: "Username", type: "text" },
                          { id: "current-password", label: "Current Password", type: "password" },
                          { id: "new-password", label: "New Password", type: "password" },
                          { id: "confirm-password", label: "Confirm Password", type: "password" },
                          { id: "email", label: "Email", type: "email" },
                          { id: "real-name", label: "Real Name", type: "text" },
                          { id: "access-level", label: "Access Level", type: "text" },
                          { id: "project-access", label: "Project Access Level", type: "text" },
                        ].map((field) => (
                          <div key={field.id} className="contents">
                            <div className="bg-gray-500 text-white px-4 py-3 border border-gray-300 flex items-center">
                              <Label htmlFor={field.id} className="text-sm font-medium">
                                {field.label}
                              </Label>
                            </div>
                            <div className="bg-white px-4 py-2 border border-gray-300">
                              <Input
                                id={field.id}
                                type={field.type}
                                className="w-full bg-white border-none"
                              />
                            </div>
                          </div>
                        ))}

                        <div className="col-span-2 flex justify-start bg-gray-300 px-4 py-3 border border-gray-300">
                          <Button className="bg-primary hover:bg-primary/90">Update User</Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Username</h3>
                      <h3 className="font-semibold text-lg mb-4">Contact Number</h3>
                      <h3 className="font-semibold text-lg mb-4">Email</h3>
                      <h3 className="font-semibold text-lg mb-4">Department</h3>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Give Your Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label htmlFor="feedback-text" className="text-sm font-medium">
                    Your Feedback
                  </Label>
                  <Textarea
                    id="feedback-text"
                    placeholder="Please share your feedback here..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="min-h-[80px] resize-none bg-gray-100"
                  />
                </div>

                <div className="text-center">
                  <Label className="text-sm font-medium mb-2 block">
                    Rate your experience
                  </Label>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5, 6].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className="transition-colors hover:scale-110 transform"
                      >
                        <Star
                          className={`h-5 w-5 ${
                            star <= rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300 hover:text-yellow-200"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => {
                    console.log("Feedback submitted:", { rating, feedback });
                  }}
                >
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
