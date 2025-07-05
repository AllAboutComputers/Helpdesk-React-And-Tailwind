import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Check, X, UserPlus } from "lucide-react";

export default function TicketApproval() {
  const tickets = [
    {
      id: "1234",
      subject: "Login issue",
      category: "Access Issue",
      priority: "High",
      date: "13/08/21",
    },
    {
      id: "1124",
      subject: "New ticket Issue",
      category: "Access Issue",
      priority: "Medium",
      date: "14/08/21",
    },
    {
      id: "1224",
      subject: "New request",
      category: "Feedback",
      priority: "Low",
      date: "13/08/21",
    },
    {
      id: "1244",
      subject: "Ticket submission",
      category: "Ticketing",
      priority: "High",
      date: "14/08/21",
    },
    {
      id: "1114",
      subject: "Login issue",
      category: "Access Issue",
      priority: "High",
      date: "3/08/21",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Ticket Approval</h2>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Find ticket"
                    className="pl-10 w-64 bg-gray-200"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Show:</span>
              <Select defaultValue="10">
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm">Entries</span>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket No.</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Assign to</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium text-blue-600">
                      {ticket.id}
                    </TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>{ticket.category}</TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>{ticket.date}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green-600 hover:bg-green-50"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Select>
                        <SelectTrigger className="w-24 bg-gray-400">
                          <UserPlus className="h-4 w-4" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="ops">Operations Team</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between pt-4">
              <span className="text-sm text-muted-foreground">
                Showing 1 to 5 of 5 entries
              </span>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  ⟨⟨
                </Button>
                <Button variant="outline" size="sm" disabled>
                  1
                </Button>
                <Button variant="outline" size="sm" disabled>
                  ⟩⟩
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
