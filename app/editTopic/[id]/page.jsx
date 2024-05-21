import EditTopicForm from "@/components/EditTopicForm.jsx";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function EditTopics({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return (
    <>
      <EditTopicForm id={id} title={title} description={description} />
    </>
  );
}

export default EditTopics;
