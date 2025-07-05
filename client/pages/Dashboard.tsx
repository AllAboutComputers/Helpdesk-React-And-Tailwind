import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Star } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Tickets",
      value: "12",
      bgColor: "bg-blue-500",
      textColor: "text-blue-950",
    },
    {
      title: "Total Solved",
      value: "8",
      bgColor: "bg-green-500",
      textColor: "text-blue-950",
    },
    {
      title: "Total Awaiting Approval",
      value: "2",
      bgColor: "bg-red-500",
      textColor: "text-blue-950",
    },
    {
      title: "Total in Progress",
      value: "2",
      bgColor: "bg-yellow-400",
      textColor: "text-blue-950",
    },
  ];

  const chartData = [
    { name: "A", value: 30 },
    { name: "B", value: 50 },
    { name: "C", value: 40 },
    { name: "D", value: 20 },
    { name: "E", value: 70 },
    { name: "F", value: 80 },
    { name: "G", value: 10 },
    { name: "H", value: 100 },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

        {/* Stats Cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className={`${stat.bgColor} ${stat.textColor} border-none shadow-lg rounded-lg w-full h-[300px] flex items-center justify-center`}
            >
              <CardContent className="p-2">
                <div className="text-center">
                  <h3 className="text-3xl font-medium mb-10">{stat.title}</h3>
                  <div className="text-9xl font-bold">{stat.value}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-6 w-full h-[350px]">
          {/* Chart Section */}
          <Card className="bg-primary h-full lg:w-[50%]">
            <CardContent className="p-4 h-full">
              <ResponsiveContainer width="90%" height="100%">
                <BarChart data={chartData}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                    interval={0}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                    width={30}
                  />
                  <Bar dataKey="value" fill="#1e40af" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Right Section */}
          <div className="flex flex-col gap-4 w-full lg:w-[50%]">
            {/* Teams */}
            <Card className="bg-primary flex-grow-[7]">
              <CardContent className="p-3">
                <div className="grid grid-cols-2 gap-4">
                  {/* Support Team */}
                  <div className="text-center">
                    <div className="w-fit mx-auto mb-2">
                      <img
                        src="/support.png"
                        alt="Support"
                        className="h-30 w-40 object-contain mx-auto mb-2"
                      />
                    </div>
                    <div className="text-2xl font-bold text-black">3</div>
                    <div className="text-sm text-black">Technical Supports</div>
                  </div>

                  {/* Management Team */}
                  <div className="text-center">
                    <div className="w-fit mx-auto mb-2">
                      <img
                        src="/management.png"
                        alt="Management"
                        className="h-30 w-40 object-contain mx-auto mb-2"
                      />
                    </div>
                    <div className="text-2xl font-bold text-black">4</div>
                    <div className="text-sm text-black">Operation Team</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Feedback */}
            <Card className="bg-primary flex-grow-[3]">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-black mb-2">
                    Customer Feedback
                  </div>
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 opacity-50" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
