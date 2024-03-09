import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";
import { auth } from "@/auth";

type Props = {};

const Header = async () => {
  const session = await auth();

  return (
    <Navbar className="shadow m-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {session?.user ? <div>Sign In</div> : <div>Sign Out</div>}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
