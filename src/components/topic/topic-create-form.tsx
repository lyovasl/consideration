"use client";
import { useFormState } from "react-dom";

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  Textarea,
  PopoverTrigger,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";

const TopicCreateForm = () => {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });
  console.log(formState.errors, "-");
  // console.log(formState, "===");

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col p-4 gap-4 w-80">
            <h1 className="text-lg">Create a topic</h1>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Discribe your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="bg-red-400 p-2 border border-red-400">
                {formState.errors._form}
              </div>
            ) : null}

            {/* <div className="bg-green-600 p-2 border border-red-400">
              {formState.errors._form?.join(", ")}
            </div> */}

            {/* { <div>{formState.errors.description?.join(", ")}</div> }///* Textarea error */}
            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
