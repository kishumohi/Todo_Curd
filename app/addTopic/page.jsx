"use client";
import { useState } from "react";
// import { POST } from "../api/topics/route.js";
import { useRouter } from "next/navigation.js";

function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required");
      return;
    }
    try {
      const res = await fetch(`/api/topics/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create an topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Topic
        </button>
      </form>
    </>
  );
}

export default AddTopic;
