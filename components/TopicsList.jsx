"use client";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
// import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

function TopicsList() {
  const [todo, setTodo] = useState([]);
  // console.log(todo);

  useEffect(() => {
    async function getTopics() {
      try {
        const res = await fetch(process.env.SITE_URL, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed To Fetch");
        }
        const result = await res.json();
        setTodo(result);
      } catch (error) {
        console.log("Fetch Api Error : ", error);
      }
    }
    getTopics();
  }, []);

  // const { topics } = await getTopics();
  return (
    <>
      {todo &&
        todo.topics &&
        todo.topics.map((t) => (
          <div
            key={t._id}
            className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5"
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}

export default TopicsList;
