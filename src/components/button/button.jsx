import { Button } from "@/components/ui/button";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
 
export function Buttondemo() {
  const [date, setDate] = React.useState(new Date())
  return <div>
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      fromYear="2022"
      showOutsideDays={true}
      today={new Date()}
      min={2}
      max={20}
    />
    <p>Current Date: { console.log(date) }</p>
    <Button variant="outline">Test Button</Button>
    </div>

}