"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Button from "./ui/button";

const schema = z.object({
  name: z.string().min(1, "Name too short"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(3, "Message too short"),
});

type FormData = z.infer<typeof schema>;

const inputStyle =
  "w-full bg-transparent border border-foreground px-4 py-2 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/90";

export const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok || result.error) {
        setStatus("error");
      } else {
        setStatus("success");
        reset();
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full sm:max-w-1/2"
    >
      <div className="flex flex-col gap-1">
        <input
          {...register("name")}
          placeholder="Name"
          className={inputStyle}
        />
        {errors.name && (
          <span className="text-xs text-red-700">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          {...register("email")}
          placeholder="Email"
          className={inputStyle}
        />
        {errors.email && (
          <span className="text-xs text-red-700">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <textarea
          {...register("message")}
          placeholder="Message"
          rows={8}
          className={`${inputStyle} resize-none`}
        />
        {errors.message && (
          <span className="text-xs text-red-700">{errors.message.message}</span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <Button
          text={status === "loading" ? "Sending..." : "Send"}
          action={handleSubmit(onSubmit)}
        />
        {status === "success" && (
          <span className="text-sm text-green-700 ">Message sent</span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-700 ">
            Something went wrong. Try again later.
          </span>
        )}
      </div>
    </form>
  );
};
