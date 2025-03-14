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
import { TransactionForm } from "@/components/forms/transaction-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Transaction } from "@/components/tables/columns"

const transactions: Transaction[] = [
  {
    id: "1",
    description: "Grocery Shopping",
    amount: 85.50,
    category: "Food",
    date: "2024-03-15",
    type: "expense"
  },
  // Add more sample transactions
]

export default function TransactionsPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-white hover:bg-primary-dark transition-colors duration-200">
              <Plus className="mr-2 h-4 w-4" />
              Add Transaction
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Transaction</DialogTitle>
              <DialogDescription>
                Add a new transaction to your account.
              </DialogDescription>
            </DialogHeader>
            <TransactionForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="income">Income</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
            <CardHeader>
              <CardTitle>All Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={transactions} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="income">
          <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
            <CardHeader>
              <CardTitle>Income Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={transactions.filter(transaction => transaction.type === 'income')} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expenses">
          <Card className="bg-background/50 backdrop-blur-sm shadow-lg border-0">
            <CardHeader>
              <CardTitle>Expense Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={transactions.filter(transaction => transaction.type === 'expense')} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}