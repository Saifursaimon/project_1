'use client';
import AdminHeader from "@/components/AminHeader";
import PinLogin from "@/components/PinLogin";
import React, { useState } from "react";

const layout = ({ children }) => {
     const [authorized, setAuthorized] = useState(false);



      if (!authorized) {
         return <PinLogin onSuccess={() => setAuthorized(true)} loginType={'admin'} />;
       }

  return (
    <div>
      <AdminHeader />
      <main>{children}</main>
    </div>
  );
};

export default layout;
