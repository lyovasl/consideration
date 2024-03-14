import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";

type Props = {};

const TopicList = async () => {
  const topics = await db.topic.findMany();

  const renderedTopic = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-row flex-wrap gap-4">{renderedTopic}</div>
  );
};

export default TopicList;
