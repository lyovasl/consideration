"use client";

import {
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  NavbarItem,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";

const HeaderAuth = () => {
  const session = useSession();
  let authContent: React.ReactNode;

  if (session.status === "loading") {
    return authContent === null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger style={{ cursor: "pointer" }}>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sing Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
};

export default HeaderAuth;
