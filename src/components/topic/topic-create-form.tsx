import {
  Button,
  Input,
  Popover,
  PopoverContent,
  Textarea,
  PopoverTrigger,
} from "@nextui-org/react";
import * as actions from "@/actions";

const TopicCreateForm = () => {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic}>
          <div className="flex flex-col p-4 gap-4 w-80">
            <h1 className="text-lg">Create a topic</h1>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Discribe your topic"
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
