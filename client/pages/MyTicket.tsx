import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import { TicketDetailsModal } from "@/components/TicketDetailsModal";
import { TeamCreationModal } from "@/components/TeamCreationModal";
import { CloseTicketModal } from "@/components/CloseTicketModal";
import { Search, FileDown, SlidersHorizontal, SortAsc } from "lucide-react";
import { useState } from "react";

export default function MyTicket() {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  const [closeModalOpen, setCloseModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const tickets = [
    {
      id: "1234",
      subject: "Login issue",
      category: "Access Issue",
      priority: "High",
      date: "13/08/21",
      status: "In Progress",
      personInCharge: "John Doe",
    },
    {
      id: "1124",
      subject: "New ticket Issue",
      category: "Access Issue",
      priority: "Medium",
      date: "14/08/21",
      status: "On hold",
      personInCharge: "Jane Smith",
    },
    {
      id: "1224",
      subject: "New request",
      category: "Feedback",
      priority: "Low",
      date: "13/08/21",
      status: "Closed",
      personInCharge: "Mike Johnson",
    },
    {
      id: "1244",
      subject: "Ticket submission",
      category: "Ticketing",
      priority: "High",
      date: "14/08/21",
      status: "In Progress",
      personInCharge: "Sarah Wilson",
    },
    {
      id: "1114",
      subject: "Login issue",
      category: "Access Issue",
      priority: "High",
      date: "3/08/21",
      status: "In Progress",
      personInCharge: "Tom Brown",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-green-500 text-white";
      case "On hold":
        return "bg-blue-500 text-white";
      case "Closed":
        return "bg-black text-white";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleTicketClick = (ticket: any) => {
    setSelectedTicket({
      ...ticket,
      name: "John Doe",
      dept: "IT",
      title: ticket.subject,
      description: "Sample description",
      type: "Bug Report",
      attachment: "none",
    });
    setDetailsModalOpen(true);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Ticket</h2>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Find ticket"
                  className="pl-10 w-64 bg-gray-200"
                />
              </div>
              <Button
                className="bg-gray-400 hover:bg-gray-500"
                onClick={() => setTeamModalOpen(true)}
              >
                <FileDown className="h-4 w-4 mr-2" />
              </Button>
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
                  <TableHead>Status</TableHead>
                  <TableHead>Person in charge</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket, index) => (
                  <TableRow
                    key={ticket.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                  >
                    <TableCell>
                      <button
                        className="font-medium text-blue-600 hover:text-blue-800"
                        onClick={() => handleTicketClick(ticket)}
                      >
                        {ticket.id}
                      </button>
                    </TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>{ticket.category}</TableCell>
                    <TableCell>{ticket.priority}</TableCell>
                    <TableCell>{ticket.date}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{ticket.personInCharge}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleTicketClick(ticket)}
                        >
                          <FileDown className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setTeamModalOpen(true)}
                        >
                          <SlidersHorizontal className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setCloseModalOpen(true)}
                        >
                          <SortAsc className="h-4 w-4" />
                        </Button>
                      </div>
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

        <TicketDetailsModal
          isOpen={detailsModalOpen}
          onClose={() => setDetailsModalOpen(false)}
          ticket={selectedTicket}
        />
        <TeamCreationModal
          isOpen={teamModalOpen}
          onClose={() => setTeamModalOpen(false)}
        />
        <CloseTicketModal
          isOpen={closeModalOpen}
          onClose={() => setCloseModalOpen(false)}
        />
      </div>
    </Layout>
  );
}
