"use client";
import React, { useEffect, useState } from "react";

function ClientTopicList() {
  const [users, setUsers] = useState([]);
  console.log("Users", users);

  useEffect(() => {
    async function fetchUsers() {
      const data = await fetch(process.env.SITE_URL);
      setUsers(await data.json());
    }
    fetchUsers();
  }, []);

  return (
    <>
      <h1>test</h1>
      {/* {users && users.users && users.users.map((user) => <h1>{user.title}</h1>)} */}
      {users.topics.map((topic) => (
        <div key={t._id}>
          <h1>{topic._id}</h1>
        </div>
      ))}
    </>
  );
}

export default ClientTopicList;
