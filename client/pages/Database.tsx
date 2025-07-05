import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Edit, Trash2 } from "lucide-react";

export default function Database() {
  const users = [
    {
      staffId: "ABC123",
      name: "Abu",
      department: "IT",
      speciality: "Software",
    },
    {
      staffId: "ABC124",
      name: "Ahmad",
      department: "Software",
      speciality: "Networking",
    },
    {
      staffId: "ABC125",
      name: "Ali",
      department: "Technical",
      speciality: "Hardware",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Database</h2>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger
                  value="user"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  User
                </TabsTrigger>
                <TabsTrigger
                value="operation"
                 className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                     Operation Team
                      </TabsTrigger>
                      <TabsTrigger
                        value="technical"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        Technical Support
                      </TabsTrigger>
              </TabsList>
              <TabsContent value="user" className="mt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Find ticket"
                        className="pl-10 w-64 bg-gray-200"
                      />
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

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead></TableHead>
                        <TableHead>Staff ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Speciality</TableHead>
                        <TableHead>Setting</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user, index) => (
                        <TableRow key={user.staffId}>
                          <TableCell>
                            <input type="checkbox" className="rounded" />
                          </TableCell>
                          <TableCell className="font-medium">
                            {user.staffId}
                          </TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.department}</TableCell>
                          <TableCell>{user.speciality}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-600"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-muted-foreground">
                      Showing 1 to 3 of 3 entries
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
                </div>
              </TabsContent>
              <TabsContent value="operation">
                <div className="text-center py-8 text-muted-foreground">
                  Operation Team data would be displayed here
                </div>
              </TabsContent>
              <TabsContent value="technical">
                <div className="text-center py-8 text-muted-foreground">
                  Technical Support data would be displayed here
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </Layout>
  );
}
