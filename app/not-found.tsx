"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Immediately redirect to home page
    router.replace(ROUTES.HOME);
  }, [router]);

  return null;
}
