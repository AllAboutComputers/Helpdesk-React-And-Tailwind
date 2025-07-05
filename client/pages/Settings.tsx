import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export default function Settings() {
  const [language, setLanguage] = useState("BM");

  // Load saved language from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Setting</h2>
        </div>

        <Card>
          <CardContent className="p-0">
            <Accordion type="multiple" className="w-full">
              {/* General Settings */}
              <AccordionItem value="general">
                <AccordionTrigger className="px-6 py-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  <div className="flex items-center justify-between w-full">
                    <span>General</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-100">
                  <div className="space-y-4">
                    {/* Language Switch */}
                    <div className="flex items-center justify-between">
                      <span>Language</span>
                      <div className="flex space-x-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          className={
                            language === "BM"
                              ? "bg-black text-white"
                              : "bg-gray-200"
                          }
                          onClick={() => setLanguage("BM")}
                        >
                          BM
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className={
                            language === "BI"
                              ? "bg-black text-white"
                              : "bg-gray-200"
                          }
                          onClick={() => setLanguage("BI")}
                        >
                          BI
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Data Backup</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Connect To */}
              <AccordionItem value="connect">
                <AccordionTrigger className="px-6 py-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  <div className="flex items-center justify-between w-full">
                    <span>Connect To</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>GoDash</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>SuperController</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Email */}
              <AccordionItem value="email">
                <AccordionTrigger className="px-6 py-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  <div className="flex items-center justify-between w-full">
                    <span>Email</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Enable SMTP</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Authorization */}
              <AccordionItem value="authorization">
                <AccordionTrigger className="px-6 py-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  <div className="flex items-center justify-between w-full">
                    <span>Authorization</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Edit authorization</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Authority Level</span>
                      <Select defaultValue="admin">
                        <SelectTrigger className="w-32 bg-gray-400">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="guest">Guest</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Notification */}
              <AccordionItem value="notification">
                <AccordionTrigger className="px-6 py-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  <div className="flex items-center justify-between w-full">
                    <span>Notification</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Enable Notification</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
