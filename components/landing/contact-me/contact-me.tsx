"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";

const ContactMe = () => {
  
  return (
    <main className="" id="about-me">
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-gradient-to-r from-blue-600 to-indigo-800 text-neutral-100 hover:text-gray-300 font-semibold"
            >
              Contact Me
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form
              action={async (FormData) => {
                await sendEmail(FormData);
              }}
            >
              <DialogHeader>
                <DialogTitle>Contact Me</DialogTitle>
                <DialogDescription>
                  Enter Your Details here to send Me a Mail ✉️
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    name="sname"
                    id="name"
                    placeholder="Shivam Shahi"
                    className="col-span-3"
                    required
                    maxLength={50}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    name="smail"
                    id="username"
                    placeholder="Jack@companymail.com"
                    className="col-span-3"
                    required
                    maxLength={50}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Message" className="text-right">
                    Message
                  </Label>
                  <Input
                    name="smsg"
                    id="username"
                    placeholder="Your Message"
                    className="col-span-3"
                    required
                    maxLength={200}
                  />
                </div>
              </div>
              <DialogFooter>
                <SubmitBtn />
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default ContactMe;
