"use client";
import React from "react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";
import "../components/Form.css";
import "tailwindcss/tailwind.css";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Forma parte de nuestro equipo!
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Nombre completo</Label>
            <Input id="firstname"  type="text" />
          </LabelInputContainer>
          <br />
          <LabelInputContainer>
            <Label htmlFor="lastname">Número telefónico</Label>

            <Input id="lastname"  type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email"  type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="curriculum_vitae">Curriculum vitae</Label>
          <Input
            id="curriculum_vitae"
            placeholder="Selecciona tu Curriculum Vitae"
            type="file"
            name="curriculum_vitae"
            accept=".pdf,.doc,.docx"
          />
        </LabelInputContainer>



        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4"></div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
