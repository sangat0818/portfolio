"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { ArrowRight, CircleAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  organisation: z.string().min(2, "Please enter your organisation."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  interest: z.string().min(1, "Please choose an area of interest."),
  timeline: z.string().min(2, "Please share your preferred timeline."),
  message: z.string().min(20, "Please add a little more detail (at least 20 characters)."),
});

type InquiryValues = z.infer<typeof inquirySchema>;

const options = [
  "Training Design & Facilitation",
  "Educator Development",
  "Curriculum & Materials Development",
  "Life Skills, Financial Literacy & EiE",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "not-configured">("idle");
  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", organisation: "", email: "", phone: "", interest: "", timeline: "", message: "" },
  });
  const hasErrors = Object.keys(errors).length > 0;

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 350));
    setStatus("not-configured");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {hasErrors && (
        <div className="form-alert" role="alert">
          <CircleAlert aria-hidden="true" />
          <span>Please review the highlighted fields.</span>
        </div>
      )}
      <div className="form-grid">
        <Field label="Name" error={errors.name?.message} required>
          <Input {...register("name")} aria-invalid={!!errors.name} autoComplete="name" placeholder="Your name" />
        </Field>
        <Field label="Organisation" error={errors.organisation?.message} required>
          <Input {...register("organisation")} aria-invalid={!!errors.organisation} autoComplete="organization" placeholder="Organisation name" />
        </Field>
        <Field label="Email" error={errors.email?.message} required>
          <Input {...register("email")} aria-invalid={!!errors.email} type="email" autoComplete="email" placeholder="you@organisation.org" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <Input {...register("phone")} type="tel" autoComplete="tel" placeholder="Optional" />
        </Field>
      </div>
      <Field label="I’m interested in" error={errors.interest?.message} required>
        <Controller
          name="interest"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="form-select" aria-invalid={!!errors.interest}>
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
              </SelectContent>
            </Select>
          )}
        />
      </Field>
      <Field label="Preferred timeline" error={errors.timeline?.message} required>
        <Input {...register("timeline")} aria-invalid={!!errors.timeline} placeholder="For example: November 2026" />
      </Field>
      <Field label="Message" error={errors.message?.message} required>
        <Textarea {...register("message")} aria-invalid={!!errors.message} rows={6} placeholder="Tell me about your audience, goals, and what support you need." />
      </Field>
      <button className="button button-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Checking…" : "Send Inquiry"} <ArrowRight aria-hidden="true" />
      </button>
      {status === "not-configured" && (
        <p className="form-status" role="status">
          Your details are valid. Form delivery still needs to be connected before this inquiry can be sent.
        </p>
      )}
      <p className="form-note">
        Form delivery is not configured yet. This form currently validates entries but does not send or store information.
      </p>
    </form>
  );
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="field">
      <span>{label}{required && <em aria-hidden="true"> *</em>}</span>
      {children}
      {error && <small className="field-error">{error}</small>}
    </label>
  );
}
