import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

// Import image (use relative path for public or import if stored locally)
import userLogo from "@/components/ui/User_logo.png";

export default function Performance() {
  const operationDetails = {
    name: "Operation Name",
    contactNo: "0123456789",
    department: "ABC",
    totalTicketHandle: 5,
    ticketSolved: 2,
    ticketPending: 1,
    ticketInProgress: 2,
    rating: 4,
  };

  const teamMembers = [
    { name: "Operation Name 1", type: "operation" },
    { name: "Operation Name 2", type: "operation" },
    { name: "Operation Name 3", type: "operation" },
  ];

  const technicalMembers = [
    { name: "Technical Support 1", type: "technical" },
    { name: "Technical Support 2", type: "technical" },
    { name: "Technical Support 3", type: "technical" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Performance</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={userLogo} alt="User" />
                <AvatarFallback>OP</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">
                  {operationDetails.name}
                </h3>
                <div className="text-sm text-muted-foreground mt-2 bg-gray-300 rounded p-2">
                  <p>Contact No: {operationDetails.contactNo}</p>
                  <p>Department: {operationDetails.department}</p>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Ticket Handle</span>
                    <span className="font-semibold">
                      {operationDetails.totalTicketHandle}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ticket Solved</span>
                    <span className="font-semibold">
                      {operationDetails.ticketSolved}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ticket Pending</span>
                    <span className="font-semibold">
                      {operationDetails.ticketPending}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ticket in progress</span>
                    <span className="font-semibold">
                      {operationDetails.ticketInProgress}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rating</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= operationDetails.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {[...teamMembers, ...technicalMembers].map((member, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={userLogo} alt={member.name} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{member.name}</span>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  View details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
