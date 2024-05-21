"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation.js";

function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are You Sure ?");
    if (confirmed) {
      const res = await fetch(`/api/topics/?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.push("/");
        // router.refresh();
      }
    }
  };
  return (
    <>
      <button onClick={removeTopic} className="text-red-400">
        <HiOutlineTrash size={24} />
      </button>
    </>
  );
}

export default RemoveBtn;
