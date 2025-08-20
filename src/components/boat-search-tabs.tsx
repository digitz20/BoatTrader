
"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BoatSearchForm } from "@/components/boat-search-form"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { Search } from "lucide-react"

export function BoatSearchTabs() {
  return (
    <Card>
      <Tabs defaultValue="boats">
        <CardHeader>
          <TabsList className="grid w-full grid-cols-2 md:w-1/3">
            <TabsTrigger value="boats">Boats</TabsTrigger>
            <TabsTrigger value="engines">Engines</TabsTrigger>
          </TabsList>
        </CardHeader>
        <TabsContent value="boats" className="px-6 pb-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Find your perfect boat</h2>
            <BoatSearchForm />
        </TabsContent>
        <TabsContent value="engines" className="px-6 pb-6">
          <div className="space-y-4">
             <h2 className="text-2xl font-bold text-primary mb-4">Find your perfect engine</h2>
             <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="md:col-span-2">
                    <Input placeholder="Search for engines" className="h-12 bg-card text-card-foreground" />
                </div>
                <Select>
                  <SelectTrigger className="h-12 bg-card text-card-foreground">
                    <SelectValue placeholder="All Engine Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Engine Types</SelectItem>
                    <SelectItem value="outboard">Outboard</SelectItem>
                    <SelectItem value="inboard">Inboard</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit" size="lg" className="h-12">
                    <Search className="mr-2 h-5 w-5" />
                    Search
                </Button>
             </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
