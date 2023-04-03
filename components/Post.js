import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EyeIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import Moment from "react-moment";

export default function Post({ post }) {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3 cursor-pointer">
      {/*user image*/}
      <img
        className="h-11 w-11 rounded-full mr-4 "
        src={post.data().userImg}
        alt="user-img"
      />

      {/*right side */}

      <div className="">
        {/* Header */}

        <div className="flex items-center justify-between">
          {/* post user info*/}

          <div className="flex space-x-1 whitespace-nowrap ">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.data().name}
            </h4>
            <span className="text-sm sm:text-[15px]">
              {" "}
              @{post.data().username} -{" "}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
          
            <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
            </span>
          </div>
          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 w-10 hoverEffect p-2 hover:bg-sky-100 hover:text-sky-500" />
        </div>

        {/* post text*/}

        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {" "}
          {post.data().text}
        </p>

        {/*post  image*/}

        <img className="rounded-2xl mr-2" src={post.data().image} alt="" />

        {/*icons*/}

        <div className="flex justify-between text-gray-500 p2">
          <ChatIcon className="h-10 w-10 hoverEffect p-2 hover:bg-sky-100" />
          <TrashIcon className="h-10 w-10 hoverEffect p-2 hover:text-red-500 hover:bg-sky-100" />
          <HeartIcon className="h-10 w-10 hoverEffect p-2 hover:text-red-500 hover:bg-sky-100" />
          <EyeIcon className="h-10 w-10 hoverEffect p-2 hover:bg-sky-100" />
          <ChartBarIcon className="h-10 w-10 hoverEffect p-2 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
