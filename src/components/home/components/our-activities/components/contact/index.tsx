import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Paperclip, Send } from "lucide-react";
import { useTranslations } from "next-intl";

// Load ReactQuill dynamically (for SSR support)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Validation Schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message should be at least 5 characters"),
  file: z.any().optional(),
});

// Form Type
type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const t = useTranslations("API");

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFileName(e.target.files[0].name);
      setValue("file", e.target.files[0]);
    }
  };

  // Submit handler
  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-gray-700 font-medium">{t.raw("bloc_2_2.btn_1")[0]}:</label>
        <input
          type="text"
          {...register("name")}
          className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
          placeholder={t.raw("bloc_2_2.btn_1")[1]}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium">{t.raw("bloc_2_2.btn_2")[0]}:</label>
        <input
          type="email"
          {...register("email")}
          className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
          placeholder={t.raw("bloc_2_2.btn_1")[1]}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-gray-700 font-medium">{t("bloc_2_2.btn_3")}:</label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <ReactQuill
              {...field}
              theme="snow"
              className="mt-1 bg-white rounded-lg"
              placeholder="Votre message..."
            />
          )}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-gray-700 font-medium">{t.raw("bloc_2_2.btn_4")[0]}:</label>
        <div className="flex items-center gap-2 mt-1">
          <label className="flex items-center gap-2 text-blue-500 cursor-pointer">
            <Paperclip className="w-5 h-5" />
            <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
            <span>{fileName || t.raw("bloc_2_2.btn_4")[1]}</span>
          </label>
          <span className="text-gray-500 text-sm">(*{t.raw("bloc_2_2.btn_4")[2]})</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
        >
          {t("bloc_2_2.btn_5")}
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          {t("bloc_2_2.btn_6")} <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
