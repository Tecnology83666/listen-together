import React, { useEffect, useState } from "react";
import useChannel from "../context/ChannelContext";
import useUser from "../context/UserContext";
import MembersSetting from "./MembersSetting";

const ChannelMembers = () => {
  const { selectedChannel } = useChannel();
  const { listenChannelMembers, users } = useUser();

  useEffect(() => {
    listenChannelMembers(selectedChannel);
  }, []);

  const renderMembers = () => {
    return Object.values(users)
      .filter(member => member.channels[selectedChannel])
      .map(({ userId, name, avatar }) => (
        <div key={userId} className="flex items-center my-2.5">
          <img src={avatar} alt="avatar" className="w-12" />
          <p className="text-lg ml-2">{name}</p>
          <MembersSetting />
        </div>
      ));
  };

  return (
    <div className="my-11">
      <h2 className="text-2xl font-semibold">Members</h2>
      <div className="mt-3.5">{renderMembers()}</div>
    </div>
  );
};

export default ChannelMembers;