import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, RotateCcw } from "lucide-react";

interface CloseTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CloseTicketModal({ isOpen, onClose }: CloseTicketModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center">
            My Ticket - Close Ticket
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <div className="bg-primary rounded-lg p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <Input
                  placeholder="Ticket No."
                  className="bg-white text-black placeholder:text-gray-600"
                />
                <Input
                  placeholder="Team name"
                  className="bg-white text-black placeholder:text-gray-600"
                />
                <div className="relative">
                  <Input
                    placeholder="Team Member"
                    className="bg-white text-black placeholder:text-gray-600 pr-10"
                  />
                  <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                </div>
              </div>
              <div>
                <Textarea
                  placeholder="Remark"
                  className="bg-white text-black placeholder:text-gray-600 h-32 resize-none"
                />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button
                className="bg-gray-400 hover:bg-gray-500 text-black"
                onClick={onClose}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Close Ticket
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
