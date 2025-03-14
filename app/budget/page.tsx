"use client"

import { useState } from "react"
import { DataTable } from "@/components/tables/data-table"
import { columns } from "@/components/tables/columns"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BudgetForm } from "@/components/forms/budget-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Budget } from "@/components/tables/columns"

const budgets: Budget[] = [
  {
    id: "1",
    category: "Food",
    amount: 500,
    spent: 300,
    remaining: 200,
    date: "2024-03-15",
  },
  // Add more sample budgets
]

export default function BudgetPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Budget</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-white hover:bg-primary-dark transition-colors duration-200">
              <Plus className="mr-2 h-4 w-4" />
              Add Budget
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Budget</DialogTitle>
              <DialogDescription>
                Add a new budget category.
              </DialogDescription>
            </DialogHeader>
            <BudgetForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
            <CardHeader>
              <CardTitle>All Budgets</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={budgets} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="food">
          <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
            <CardHeader>
              <CardTitle>Food Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={budgets.filter(budget => budget.category === 'Food')} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="entertainment">
          <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
            <CardHeader>
              <CardTitle>Entertainment Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={budgets.filter(budget => budget.category === 'Entertainment')} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}