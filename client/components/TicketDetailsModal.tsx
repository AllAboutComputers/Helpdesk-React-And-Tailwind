import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TicketDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket?: {
    id: string;
    date?: string;
    name?: string;
    dept?: string;
    title?: string;
    description?: string;
    category?: string;
    type?: string;
    priority?: string;
    status?: string;
    attachment?: string;
  };
}

export function TicketDetailsModal({
  isOpen,
  onClose,
  ticket,
}: TicketDetailsModalProps) {
  if (!ticket) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Ticket Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 py-4">
          <div>
            <span className="font-semibold">Ticket No: {ticket.id}</span>
          </div>
          <div>
            <span className="font-semibold">Date:</span> {ticket.date}
          </div>
          <div>
            <span className="font-semibold">Name:</span> {ticket.name}
          </div>
          <div>
            <span className="font-semibold">Dept:</span> {ticket.dept}
          </div>
          <div className="pt-2">
            <span className="font-semibold">Title:</span> {ticket.title}
          </div>
          <div>
            <span className="font-semibold">Description:</span>{" "}
            {ticket.description}
          </div>
          <div>
            <span className="font-semibold">Category:</span> {ticket.category}
          </div>
          <div>
            <span className="font-semibold">Type:</span> {ticket.type}
          </div>
          <div>
            <span className="font-semibold">Priority:</span> {ticket.priority}
          </div>
          <div>
            <span className="font-semibold">Status:</span> {ticket.status}
          </div>
          <div>
            <span className="font-semibold">Attachment:</span>{" "}
            {ticket.attachment}
          </div>
        </div>
        <div className="flex justify-center space-x-2 pt-4">
          <Button className="bg-blue-500 hover:bg-blue-600">Update</Button>
          <Button className="bg-green-500 hover:bg-green-600" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
