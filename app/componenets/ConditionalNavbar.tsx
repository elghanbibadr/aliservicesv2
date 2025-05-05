// app/components/ConditionalNavbar.tsx (or your preferred location)
"use client"; // <-- IMPORTANT: Mark this as a Client Component

import { usePathname } from 'next/navigation';
import Navbar from './Navbar'; // <-- Adjust path to your actual Navbar component
import Container from './ui/Container'; // Import Container if Navbar needs it structurally

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Check if the current path starts with /admin
  const isAdminPath = pathname?.startsWith('/admin');

  // If it's an admin path, render nothing (or null)
  if (isAdminPath) {
    return null;
  }

  // Otherwise, render the Navbar inside its Container
  return (
    <Container>
      <Navbar />
    </Container>
  );
}