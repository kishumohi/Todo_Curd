import EditTopicForm from "@/components/EditTopicForm.jsx";

async function EditTopics({ params }) {
  const getTopicById = async (id) => {
    try {
      const res = await fetch(`${process.env.SITE_URL}/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
      const respoo = res.json();
      return respoo;
    } catch (error) {
      console.log(error);
    }
  };
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
