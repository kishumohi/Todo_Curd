import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch(process.env.SITE_URL, {
      cache: "force-cache" | "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed To Fetch");
    }
    return res.json();
  } catch (error) {
    console.log("Fetch Api Error : ", error);
  }
};

async function TopicsList() {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
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
