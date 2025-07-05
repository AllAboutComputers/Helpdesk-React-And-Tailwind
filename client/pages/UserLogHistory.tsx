import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

export default function UserLogHistory() {
  const logs = [
    {
      no: 1,
      dateSignIn: "130821 / 0800",
      staffId: "XL000001",
      department: "OT",
      activity: "Create Team",
      dateSignOut: "130821 / 0815",
    },
    {
      no: 2,
      dateSignIn: "130821 / 0805",
      staffId: "",
      department: "",
      activity: "",
      dateSignOut: "130821 / 0810",
    },
    {
      no: 3,
      dateSignIn: "",
      staffId: "",
      department: "",
      activity: "",
      dateSignOut: "",
    },
    {
      no: 4,
      dateSignIn: "",
      staffId: "",
      department: "",
      activity: "",
      dateSignOut: "",
    },
    {
      no: 5,
      dateSignIn: "",
      staffId: "",
      department: "",
      activity: "",
      dateSignOut: "",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            User Log History
          </h2>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 mb-4">
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

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>No.</TableHead>
                  <TableHead>Date/Sign In Time</TableHead>
                  <TableHead>Staff ID</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Date/Sign Out time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log) => (
                  <TableRow
                    key={log.no}
                    className={log.no % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    <TableCell>{log.no}.</TableCell>
                    <TableCell>{log.dateSignIn}</TableCell>
                    <TableCell>{log.staffId}</TableCell>
                    <TableCell>{log.department}</TableCell>
                    <TableCell>{log.activity}</TableCell>
                    <TableCell>{log.dateSignOut}</TableCell>
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
