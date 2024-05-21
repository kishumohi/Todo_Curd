"use client";
import EditTopicForm from "@/components/EditTopicForm.jsx";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function EditTopics() {
  const [topicinfo, setTopicInfo] = useState();
  // const [topicinfo, setTopicInfo] = useState();
  // const [topicinfo, setTopicInfo] = useState();
  const router = useParams();
  const id = router.id;
  // console.log(router.id);
  // console.log(topicinfo);
  useEffect(() => {
    // const id = id;
    async function getTopicsById(id) {
      const data = await fetch(`/api/topics/${id}`);
      setTopicInfo(await data.json());
    }
    getTopicsById(id);
    // console.log(id);
  }, []);

  return (
    <>
      {/* EditTopics */}
      {/* <h1>{topicinfo?.topic?.title}</h1> */}
      <EditTopicForm
        id={topicinfo?.topic?._id}
        title={topicinfo?.topic?.title}
        description={topicinfo?.topic?.description}
      />
    </>
  );
}

export default EditTopics;
