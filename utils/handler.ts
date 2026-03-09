import followers from "@/lib/data/followers.json";
import following from "@/lib/data/following.json";
// import notfollower from "@/lib/data/notfollower.json";
import fs from "fs";
import path from "path";

//create an array of object then finally push or write  that array on the json file


const notfollowers:{title:string , link:string }[] =  [] //this array will store the not followers


export default function handler(){

    const followingLength = following.relationships_following.length; //the number of my following

   for (let index = 0; index < followingLength; index++) {
    
    const element = following.relationships_following[index];
    
    
   }
}

//    followers.map((follower) => {
//     console.log(follower);
//   });

//   Update the JSON file with the new data
//   const updatedData = JSON.stringify([...notfollower, followers[0]], null, 2);
//   fs.writeFileSync(path.join(process.cwd(), '/lib/data/notfollower.json'), updatedData, 'utf8');  