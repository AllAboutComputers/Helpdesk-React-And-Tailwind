import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Paperclip } from "lucide-react";

export default function NewTicket() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Create New Ticket
          </h2>
        </div>

        <Card className="max-w-4xl">
          <CardContent className="p-8">
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ticket-no">Ticket No.</Label>
                  <Input
                    id="ticket-no"
                    className="bg-gray-300"
                    placeholder="Auto-generated"
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date:</Label>
                  <Input id="date" className="bg-gray-300" type="date" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name:</Label>
                  <Input id="name" className="bg-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department:</Label>
                  <Input id="department" className="bg-gray-300" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject:</Label>
                <Input
                  id="subject"
                  className="bg-gray-300"
                  placeholder="Enter ticket subject"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category:</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-300">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">
                          Technical Issue
                        </SelectItem>
                        <SelectItem value="billing">Billing</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Type:</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-300">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="enhancement">Enhancement</SelectItem>
                        <SelectItem value="question">Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority:</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-300">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description:</Label>
                  <Textarea
                    id="description"
                    className="bg-gray-300 h-40 resize-none"
                    placeholder="Please provide a detailed description of your issue..."
                  />
                  <div className="flex justify-end mt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-2"
                    >
                      <Paperclip className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="recaptcha" />
                <Label htmlFor="recaptcha" className="text-sm">
                  I'm not a robot
                </Label>
                <div className="text-xs text-gray-500 ml-auto">
                  reCAPTCHA Privacy - Terms
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="w-48 bg-primary hover:bg-primary/90">
                  Submit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
