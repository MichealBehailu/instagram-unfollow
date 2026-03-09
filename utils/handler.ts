import followers from "@/lib/data/followers.json";
import notfollower from "@/lib/data/notfollower.json";
import fs from "fs";
import path from "path";

export default function handler(){
   // followers.map((follower) => {
  //   console.log(follower);
  // });

  // Update the JSON file with the new data
  // const updatedData = JSON.stringify([...notfollower, followers[0]], null, 2);
  // fs.writeFileSync(path.join(process.cwd(), '/lib/data/notfollower.json'), updatedData, 'utf8');   
}