'use client'
import Editor from "@/components/Editor";
import Image from "next/image";
import TextareaAutosize  from "react-textarea-autosize";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col px-24 py-10 w-full ">
        <TextareaAutosize placeholder="Untitled" className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"/>
      </div>
      <Editor/>
    </main>
  );
}
