"use client";

import handler from "@/utils/handler";
import notfollower from "@/lib/data/notfollower.json";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { removeUser } from "./actions";
import { useState } from "react";
export default function Home() {
  const [notfollowers, setNotfollowers] = useState(notfollower);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log(handler());
  return (
    <>
      <section className="flex min-h-screen items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            People that don't follow back
          </h1>
          <div className="space-y-4">
            {notfollowers.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">
                      {item.title.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <dt className="text-lg font-medium text-gray-900">
                    {item.title}
                  </dt>
                </div>
                <dd className="text-muted-foreground">
                  <Button
                    variant="destructive"
                    className="hover:bg-red-600 transition-colors"
                    onClick={async () => {
                      await removeUser(item.title);
                      setNotfollowers((prev) =>
                        prev.filter((user) => user.title !== item.title),
                      );
                      window.open(item.link, "_blank");
                    }}
                  >
                    Unfollow
                  </Button>
                </dd>
              </div>
            ))}
          </div>
          <Separator className="mt-8" />
        </div>
      </section>
    </>
  );
}
