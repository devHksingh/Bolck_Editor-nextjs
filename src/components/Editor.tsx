'use client'
import { BlockNoteEditor, BlockNoteSchema, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import React from "react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import "@blocknote/mantine/style.css";
import { uploadFiles } from "@/utils/uploadthing";

interface EditorProps{
    onChange:()=> void;
    initialContent?:string;
    editable?:boolean
}

const Editor:React.FC<EditorProps> = ({
    onChange,
    initialContent,
    editable
}) => {
    const editor:BlockNoteEditor = useCreateBlockNote({
        initialContent :initialContent ? (JSON.parse(initialContent) as PartialBlock) :undefined,
        uploadFile: async (file:File)=>{
            const [res] = await uploadFiles('imageUploader',{files:[file]})
            return res.url
        }
    })
  return (
    <div className="-mx-[54px] my-4">
        <BlockNoteView editor={editor} editable={editable} theme='dark' onChange={onChange}/>
    </div>
  )
}

export default Editor