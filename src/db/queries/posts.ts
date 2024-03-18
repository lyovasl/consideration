import { Post } from "@prisma/client";
import { db } from "@/db";
import { select } from "@nextui-org/react";

export type PostWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

export const fetchPostsByTopicSlug = (slug: string): Promise<PostWithData[]> => {
  return db.post.findMany({
    where: { topic: { slug: slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
};


