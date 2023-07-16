import styles from './App.module.scss';
import { useState, useEffect } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from "@/components/ui/button"
import { Mail, Loader2 } from "lucide-react"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 
const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
})

function App() {
    
   const [isLoading, setIsloading] = useState(false);


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


    return (
        <div className={styles.App}>



    <Card className="w-[300px] m-auto h-auto">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 float-left text-left">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                        <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                            <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                        <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                            <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" variant="outline" onClick={()=>setIsloading( !isLoading )} > 
                        {isLoading? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" /> }
                        Send a Mail
                </Button>
            </form>
            </Form>
          </div>
      </CardContent>
    </Card>
            

        </div>
    );
}

export default App;
