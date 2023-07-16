import styles from './contact.module.scss';
import classNames from 'classnames';
import * as React from 'react';
import {useState} from 'react'

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Loader2 } from "lucide-react"

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {

const [isLoading, setIsloading] = useState(false);

    return (
        <Card className="w-[550px]">
            <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Please Send Your Message.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">You Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter Your Name"
                                className="border-gray-300"
                            />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Your Email</Label>
                            <Input
                                id="name"
                                placeholder="Enter Your Email"
                                className="border-gray-300"
                            />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Your Message</Label>
                            <Textarea
                                placeholder="Type your message here."
                                className="border-gray-300"
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                   <Button type="submit" variant="outline" className="border-gray-300" onClick={()=>setIsloading( !isLoading )} > 
                        {isLoading? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" /> }
                        Send a Mail
                </Button>
            </CardFooter>
        </Card>
    );
};
