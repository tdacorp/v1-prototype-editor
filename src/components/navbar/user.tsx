"use client";

import React from "react";
import { User as UserIcon } from "lucide-react";
import Image from "next/image";

interface UserProps {
  name?: string;
  avatar?: string;
}

export default function User({ name = "Guest", avatar }: UserProps) {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      {avatar ? (
        <Image
          src={avatar}
          alt={name}
          width={32}
          height={32}
          className="rounded-full border object-cover"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <UserIcon size={18} className="text-gray-600" />
        </div>
      )}
      <span className="hidden sm:block font-medium text-sm text-gray-700">
        {name}
      </span>
    </div>
  );
}
