"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This page is no longer used. Redirect to the homepage.
export default function SignInPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return null;
}
