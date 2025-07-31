
"use client";

import { useEffect, useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { sendContactEmail } from "@/app/contact/actions";
import type { FormState } from "@/app/contact/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={pending}>
      {pending ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4"/></>}
    </Button>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const initialState: FormState = { success: false, message: '' };
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Message Sent!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: state.message,
        });
      }
    }
  }, [state, toast]);


  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get In Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Card className="bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
               <form ref={formRef} action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Enter Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required minLength={2} />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="email">Enter Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Inquiry about residential design" required minLength={5} />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your project or inquiry..."
                      className="min-h-[120px]"
                      required
                      minLength={10}
                    />
                  </div>
                  <SubmitButton />
                </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
             <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg text-muted-foreground">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <span>Near Divyam Medicos Main Bus Stand Goli</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-accent" />
                        <span>+91 7766001420 / 9592481256</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-accent" />
                        <span>bvdesign35@gmail.com</span>
                    </div>
                </CardContent>
             </Card>

             <Card className="bg-card shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video w-full rounded-lg overflow-hidden relative">
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.720888922444!2d75.9922417749882!3d32.57644809292831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c91d3468693eb%3A0x1175dc6434f46f8b!2sB%26V%20DESIGN!5e0!3m2!1sen!2sin!4v1722005051187!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
