import followers from "@/lib/data/followers.json";
import following from "@/lib/data/following.json";
// import notfollower from "@/lib/data/notfollower.json";
import fs from "fs";
import path from "path";

//create an array of object then finally push or write  that array on the json file


const notfollowers:{title:string , link:string }[] =  [] //this array will store the not followers


export default function handler(){

  const followersLength = followers.length; //the number of my followers

//   return followersLength;

   for (let index = 0; index < followersLength; index++) {
    
    const followerUser = followers[index].string_list_data[0].value;
    const followingUser = following.relationships_following[index].title;
    
    if(followerUser !== followingUser){
      notfollowers.push({
        title: followingUser,
        link: following.relationships_following[index].string_list_data[0].href
      });
    }
    
    
   }
}

//    followers.map((follower) => {
//     console.log(follower);
//   });

//   Update the JSON file with the new data
//   const updatedData = JSON.stringify([...notfollower, followers[0]], null, 2);
//   fs.writeFileSync(path.join(process.cwd(), '/lib/data/notfollower.json'), updatedData, 'utf8');  