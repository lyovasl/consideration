import PostList from "@/components/posts/post-list";
import TopicCreateForm from "@/components/topic/topic-create-form";
import TopicList from "@/components/topic/topic-list";
import { fetchTopPost } from "@/db/queries/posts";
import { Divider } from "@nextui-org/react";

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4s">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPost} />
      </div>
      <div className="border shadow px-2 py-3">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
};

export default Home;
