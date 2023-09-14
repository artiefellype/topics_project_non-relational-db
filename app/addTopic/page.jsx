"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  console.log("HII");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!title || !description){
        alert("Titulo e descricao sao necessários");
        return
    }

    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title,
                description
            })
        })

        if(res.ok) router.push('/')
        else new Error("Failed to create topic")

    } catch (error) {
        console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
