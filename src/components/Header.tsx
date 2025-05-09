import React from "react";
import { FizziLogo } from "@/components/FizziLogo";
import { SpriteLogo } from "./SpriteLogo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <SpriteLogo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
}
