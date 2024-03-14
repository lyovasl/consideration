"use client";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../common/form-button";

const PostCreateForm = () => {
  const [formState, action] = useFormState(actions.createPost, {
    errors: {},
  });

  console.log(formState, "***");

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col p-4 gap-4 w-80">
            <h3 className="text-lg">Create a post</h3>
            <Input
              name="title"
              placeholder="Title"
              label="Title"
              labelPlacement="outside"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />

            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
            />
{/* 
            {formState.errors._form ? (
              <div className="bg-green-900">YES</div>
            ) : (
              <div>No</div>
            )} */}

            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
