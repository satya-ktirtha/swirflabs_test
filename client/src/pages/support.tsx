import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/lib/data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(8),
  subject: z.string().min(1),
  product: z.string().optional(),
  message: z.string().min(10),
});

export default function Support() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "question",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Support Request Sent",
      description: "We've received your message and will get back to you shortly.",
    });
    console.log(values);
  }

  return (
    <Layout>
      <div className="bg-secondary/30 border-b border-border py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">DCS Support</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're here to help. Find answers to common questions or get in touch with our team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-3xl font-black italic uppercase mb-8">Contact Us</h2>
          <div className="bg-white dark:bg-card border border-border p-10 shadow-2xl rounded-[var(--radius)]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-black uppercase tracking-widest text-xs">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@company.com" {...field} className="rounded-full bg-secondary/50 h-12 border-none px-6" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-black uppercase tracking-widest text-xs">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+62 " {...field} className="rounded-full bg-secondary/50 h-12 border-none px-6" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-black uppercase tracking-widest text-xs">Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-full bg-secondary/50 h-12 border-none px-6">
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-[var(--radius)]">
                            <SelectItem value="question">General Question</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="product"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-black uppercase tracking-widest text-xs">Related Brand</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-full bg-secondary/50 h-12 border-none px-6">
                              <SelectValue placeholder="Select Brand" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-[var(--radius)]">
                            <SelectItem value="none">None / General</SelectItem>
                            {products.map(p => (
                              <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-black uppercase tracking-widest text-xs">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[150px] rounded-[var(--radius)] bg-secondary/50 border-none p-6 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full rounded-full h-14 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                  Submit Request
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Right: FAQ & Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-black italic uppercase mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border px-6 rounded-[var(--radius)] bg-white dark:bg-card shadow-sm">
                <AccordionTrigger className="font-bold hover:no-underline">What is the warranty period?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-medium">
                  All DCS hardware products come with a standard 2-year warranty covering manufacturing defects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-border px-6 rounded-[var(--radius)] bg-white dark:bg-card shadow-sm">
                <AccordionTrigger className="font-bold hover:no-underline">Do you offer bulk pricing?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-medium">
                  Yes, for enterprise orders exceeding 50 units, please contact our sales team using the form for a custom quote.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-border px-6 rounded-[var(--radius)] bg-white dark:bg-card shadow-sm">
                <AccordionTrigger className="font-bold hover:no-underline">How do I reset my device?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-medium">
                  Most DCS devices can be factory reset by holding the reset button for 10 seconds while the device is powered on.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-3xl font-black italic uppercase mb-8">Service Operations</h2>
            <div className="bg-white dark:bg-card p-10 border border-border space-y-6 shadow-2xl rounded-[var(--radius)]">
              <div>
                <h3 className="font-black uppercase tracking-widest text-xs text-primary mb-2">Office Hours</h3>
                <p className="font-bold">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="font-bold">Saturday: 10:00 AM - 2:00 PM EST</p>
              </div>
              <Separator className="opacity-50" />
              <div>
                <h3 className="font-black uppercase tracking-widest text-xs text-primary mb-2">Technical Support</h3>
                <p className="font-bold">Available 24/7 via Email</p>
                <p className="font-bold">Phone support during business hours</p>
              </div>
              <Separator className="opacity-50" />
              <div>
                <h3 className="font-black uppercase tracking-widest text-xs text-primary mb-2">Headquarters</h3>
                <p className="font-bold">100 Tech Park Drive</p>
                <p className="font-bold text-muted-foreground">San Jose, CA 95110</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}